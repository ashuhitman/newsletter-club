import { useState } from "react";
import {
    ArrowLeft,
    ImagePlus,
    Save,
    Send,
    X,
} from "lucide-react";
import { Link, useNavigate } from "react-router";

export function CreateNewsletter() {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [issue, setIssue] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [coverPreview, setCoverPreview] = useState<string | null>(null);

    const handleCoverChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const file = event.target.files?.[0];

        if (!file) return;

        const previewUrl = URL.createObjectURL(file);
        setCoverPreview(previewUrl);
    };

    const removeCover = () => {
        if (coverPreview) {
            URL.revokeObjectURL(coverPreview);
        }

        setCoverPreview(null);
    };

    const handleSaveDraft = () => {
        console.log({
            title,
            issue,
            date,
            description,
            content,
            status: "draft",
        });

        navigate("/teacher/newsletters");
    };

    const handlePublish = () => {
        console.log({
            title,
            issue,
            date,
            description,
            content,
            status: "published",
        });

        navigate("/teacher/newsletters");
    };

    return (
        <div className="mx-auto max-w-5xl space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link
                    to="/teacher/newsletters"
                    className="flex size-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-950"
                    aria-label="Back to newsletters"
                >
                    <ArrowLeft className="size-4" />
                </Link>

                <div>
                    <h1 className="text-2xl font-black tracking-tight text-slate-950">
                        Create Newsletter
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Create and publish a new school newsletter.
                    </p>
                </div>
            </div>

            {/* Form */}
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    handlePublish();
                }}
                className="space-y-6"
            >
                {/* Basic Information */}
                <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                    <div className="mb-5">
                        <h2 className="text-base font-bold text-slate-950">
                            Newsletter Information
                        </h2>

                        <p className="mt-1 text-xs text-slate-500">
                            Basic information about this publication.
                        </p>
                    </div>

                    <div className="space-y-5">
                        {/* Title */}
                        <div>
                            <label
                                htmlFor="title"
                                className="mb-2 block text-sm font-semibold text-slate-800"
                            >
                                Newsletter Title
                            </label>

                            <input
                                id="title"
                                type="text"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                                placeholder="e.g. Our School Newsletter — August 2026"
                                required
                                className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        {/* Issue + Date */}
                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="issue"
                                    className="mb-2 block text-sm font-semibold text-slate-800"
                                >
                                    Issue
                                </label>

                                <input
                                    id="issue"
                                    type="text"
                                    value={issue}
                                    onChange={(event) => setIssue(event.target.value)}
                                    placeholder="August 2026"
                                    required
                                    className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="date"
                                    className="mb-2 block text-sm font-semibold text-slate-800"
                                >
                                    Publication Date
                                </label>

                                <input
                                    id="date"
                                    type="date"
                                    value={date}
                                    onChange={(event) => setDate(event.target.value)}
                                    required
                                    className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label
                                htmlFor="description"
                                className="mb-2 block text-sm font-semibold text-slate-800"
                            >
                                Short Description
                            </label>

                            <textarea
                                id="description"
                                value={description}
                                onChange={(event) =>
                                    setDescription(event.target.value)
                                }
                                placeholder="A short introduction to this newsletter..."
                                rows={3}
                                className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                            />
                        </div>
                    </div>
                </section>

                {/* Cover */}
                <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                    <div className="mb-5">
                        <h2 className="text-base font-bold text-slate-950">
                            Cover Image
                        </h2>

                        <p className="mt-1 text-xs text-slate-500">
                            Add a cover image for the newsletter.
                        </p>
                    </div>

                    {coverPreview ? (
                        <div className="relative max-w-xs overflow-hidden rounded-xl border border-slate-200">
                            <img
                                src={coverPreview}
                                alt="Newsletter cover preview"
                                className="aspect-[3/4] w-full object-cover"
                            />

                            <button
                                type="button"
                                onClick={removeCover}
                                className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-slate-950/70 text-white backdrop-blur transition-colors hover:bg-slate-950"
                                aria-label="Remove cover"
                            >
                                <X className="size-4" />
                            </button>
                        </div>
                    ) : (
                        <label
                            htmlFor="cover"
                            className="flex max-w-xl cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 px-6 py-12 text-center transition-colors hover:border-amber-300 hover:bg-amber-50"
                        >
                            <div className="flex size-12 items-center justify-center rounded-xl bg-white text-blue-950 shadow-sm">
                                <ImagePlus className="size-5" />
                            </div>

                            <p className="mt-4 text-sm font-semibold text-slate-800">
                                Upload newsletter cover
                            </p>

                            <p className="mt-1 text-xs text-slate-500">
                                PNG, JPG or WebP
                            </p>

                            <input
                                id="cover"
                                type="file"
                                accept="image/png,image/jpeg,image/webp"
                                onChange={handleCoverChange}
                                className="sr-only"
                            />
                        </label>
                    )}
                </section>

                {/* Content */}
                <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                    <div className="mb-5">
                        <h2 className="text-base font-bold text-slate-950">
                            Newsletter Content
                        </h2>

                        <p className="mt-1 text-xs text-slate-500">
                            Write the main content of your newsletter.
                        </p>
                    </div>

                    <textarea
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                        placeholder="Write your newsletter content here..."
                        rows={16}
                        required
                        className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                </section>

                {/* Actions */}
                <div className="sticky bottom-4 z-10 flex flex-col-reverse gap-3 rounded-xl border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur sm:flex-row sm:items-center sm:justify-between">
                    <button
                        type="button"
                        onClick={handleSaveDraft}
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                    >
                        <Save className="size-4" />
                        Save Draft
                    </button>

                    <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-900"
                    >
                        <Send className="size-4" />
                        Publish Newsletter
                    </button>
                </div>
            </form>
        </div>
    );
}