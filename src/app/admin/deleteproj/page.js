"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2, Loader2, ArrowLeft, AlertCircle } from "lucide-react";
import Link from "next/link";

const DeleteProjectPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deletingId, setDeletingId] = useState(null);
    const [error, setError] = useState("");
    const router = useRouter();

    // Fetch projects
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch("/api/project");

                if (!res.ok) {
                    throw new Error("Failed to fetch projects");
                }

                const data = await res.json();
                setProjects(Array.isArray(data) ? data : data.projects || []);
            } catch (err) {
                console.error(err);
                setError("Failed to load projects");
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    // Delete project
    const deleteProject = async (id) => {
        if (!confirm("Are you sure you want to delete this project? This action cannot be undone!")) {
            return;
        }

        setDeletingId(id);
        setError("");

        try {
            const res = await fetch(`/api/project/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            const data = await res.json();

            if (data.success || res.ok) {
                // Remove from UI
                setProjects((prev) => prev.filter((p) => p._id !== id && p.id !== id));
                alert("Project deleted successfully!");
            } else {
                setError(data.message || "Delete failed");
                alert(data.message || "Delete failed");
            }
        } catch (err) {
            console.error(err);
            setError("Network error: Failed to delete project");
            alert("Failed to delete project. Please try again.");
        } finally {
            setDeletingId(null);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0f] text-white">
                <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
                <p className="mt-4 text-gray-400">Loading projects...</p>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white px-6 py-20">
            <div className="max-w-5xl mx-auto">
                {/* Header with back button */}
                <div className="flex items-center gap-4 mb-8">
                    <Link
                        href="/admin/dashboard"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Dashboard
                    </Link>
                </div>

                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-4xl font-bold">
                            Remove <span className="text-red-500">Projects</span>
                        </h1>
                        <p className="text-gray-400 mt-2">Select a project to permanently delete</p>
                    </div>
                    <div className="bg-red-500/20 px-4 py-2 rounded-lg">
                        <p className="text-red-400 font-semibold">{projects.length} Projects</p>
                    </div>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="mb-6 bg-red-500/20 border border-red-500 rounded-lg p-4 flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                        <p className="text-red-300">{error}</p>
                    </div>
                )}

                {/* Projects List */}
                {projects.length === 0 ? (
                    <div className="text-center py-20 bg-gray-800/30 rounded-xl border border-gray-700/50">
                        <p className="text-gray-400 text-lg">No projects found</p>
                        <Link
                            href="/admin/projects/add"
                            className="inline-block mt-4 px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                        >
                            Add New Project
                        </Link>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.map((project) => (
                            <div
                                key={project._id || project.id}
                                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:border-red-500/50"
                            >
                                <div className="flex justify-between items-start gap-4">
                                    <div className="flex-1">
                                        <h2 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors">
                                            {project.title}
                                        </h2>
                                        <p className="text-sm text-gray-400 mt-1">
                                            {project.duration || project.date || "No date specified"}
                                        </p>
                                        {project.description && (
                                            <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                                                {project.description}
                                            </p>
                                        )}
                                        {project.tech && project.tech.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {project.tech.slice(0, 3).map((tech, idx) => (
                                                    <span key={idx} className="text-xs px-2 py-1 bg-gray-700 rounded-md text-gray-300">
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.tech.length > 3 && (
                                                    <span className="text-xs px-2 py-1 bg-gray-700 rounded-md text-gray-400">
                                                        +{project.tech.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        onClick={() => deleteProject(project._id || project.id)}
                                        disabled={deletingId === (project._id || project.id)}
                                        className="bg-red-600 hover:bg-red-700 p-3 rounded-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-110"
                                        title="Delete Project"
                                    >
                                        {deletingId === (project._id || project.id) ? (
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                        ) : (
                                            <Trash2 className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Delete Instructions */}
                {projects.length > 0 && (
                    <div className="mt-12 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                        <p className="text-yellow-400 text-sm text-center">
                            ⚠️ Warning: Deleted projects cannot be recovered. Please be careful!
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
};

export default DeleteProjectPage;