import {
    Camera,
    Images,
} from "lucide-react";

import {
    getImageUrl,
} from "../../../services/storageService";


/* ─────────────────────────────────────
   PROPS
───────────────────────────────────── */

interface NewsletterGalleryPageProps {
    images: string[];
    compact?: boolean;
}


/* ─────────────────────────────────────
   PAGE
───────────────────────────────────── */

export function NewsletterGalleryPage({
    images,
    compact = false,
}: NewsletterGalleryPageProps) {

    /* ─────────────────────────────
       EMPTY GALLERY
    ───────────────────────────── */



    if (!images.length) {

        return (
            <article
                className="
                    flex
                    h-full
                    w-full
                    flex-col
                    items-center
                    justify-center
                    overflow-hidden
                    bg-[#f8fafc]
                    text-center
                "
            >

                <Images
                    className="
                        size-8
                        text-slate-300
                    "
                />

                <p
                    className="
                        mt-3
                        text-sm
                        font-semibold
                        text-slate-500
                    "
                >
                    No gallery moments
                </p>

            </article>
        );
    }


    /* ─────────────────────────────
       SELECT PHOTOS
    ───────────────────────────── */

    const galleryImages =
        images.slice(
            0,
            compact ? 5 : 8,
        );

    console.log(galleryImages);


    return (
        <article
            className="
                relative
                h-full
                w-full
                overflow-hidden
                bg-[#f3f0e8]
            "
        >

            {/* ═════════════════════════
                PAGE
            ═════════════════════════ */}

            <div
                className={`
                    flex
                    h-full
                    flex-col
                    overflow-hidden

                    ${compact
                        ? "px-5 py-6"
                        : "px-8 py-9 sm:px-12 sm:py-11"
                    }
                `}
            >

                {/* ═════════════════════
                    HEADER
                ═════════════════════ */}

                <div
                    className="
                        flex
                        shrink-0
                        items-end
                        justify-between
                        gap-4
                    "
                >

                    <div>

                        {/* LABEL */}

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                            "
                        >

                            <Camera
                                className={`
                                    text-amber-600

                                    ${compact
                                        ? "size-3"
                                        : "size-4"
                                    }
                                `}
                            />

                            <p
                                className={`
                                    font-bold
                                    uppercase
                                    tracking-[0.2em]
                                    text-amber-600

                                    ${compact
                                        ? "text-[7px]"
                                        : "text-[10px]"
                                    }
                                `}
                            >
                                Gallery
                            </p>

                        </div>


                        {/* TITLE */}

                        <h2
                            className={`
                                font-black
                                leading-none
                                tracking-tight
                                text-slate-950

                                ${compact
                                    ? "mt-2 text-xl"
                                    : "mt-3 text-3xl sm:text-4xl"
                                }
                            `}
                        >
                            Moments
                        </h2>


                        {/* DESCRIPTION */}

                        <p
                            className={`
                                text-slate-500

                                ${compact
                                    ? "mt-1 text-[8px]"
                                    : "mt-2 text-sm"
                                }
                            `}
                        >
                            A glimpse of life at our school.
                        </p>

                    </div>


                    {/* PHOTO COUNT */}

                    <div
                        className="
                            shrink-0
                            rounded-full
                            bg-white
                            px-2.5
                            py-1
                            shadow-sm
                            ring-1
                            ring-slate-200
                        "
                    >

                        <p
                            className={`
                                font-bold
                                text-slate-500

                                ${compact
                                    ? "text-[7px]"
                                    : "text-xs"
                                }
                            `}
                        >
                            {galleryImages.length}{" "}
                            {galleryImages.length === 1
                                ? "photo"
                                : "photos"}
                        </p>

                    </div>

                </div>


                {/* ═════════════════════
                    PHOTO GRID
                ═════════════════════ */}

                <div
                    className={`
                        min-h-0
                        flex-1

                        ${compact
                            ? "mt-4"
                            : "mt-6"
                        }
                    `}
                >

                    <div
                        className="
                            grid
                            h-full
                            grid-cols-2
                            grid-rows-3
                            gap-2
                        "
                    >

                        {galleryImages.map(
                            (
                                imageFileId,
                                index,
                            ) => (

                                <figure
                                    key={
                                        imageFileId
                                    }
                                    className={`
                                        group
                                        relative
                                        min-h-0
                                        overflow-hidden
                                        rounded-lg
                                        bg-slate-200

                                        ${index === 0
                                            ? "row-span-2"
                                            : ""
                                        }

                                        ${index === 3
                                            ? "col-span-2"
                                            : ""
                                        }
                                    `}
                                >

                                    <img
                                        src={
                                            getImageUrl(
                                                imageFileId,
                                            )
                                        }
                                        alt="School gallery"
                                        className="
                                            h-full
                                            w-full
                                            object-cover
                                            transition-transform
                                            duration-500
                                            group-hover:scale-105
                                        "
                                    />

                                </figure>

                            ),
                        )}

                    </div>

                </div>


                {/* ═════════════════════
                    FOOTER
                ═════════════════════ */}

                <div
                    className={`
                        flex
                        shrink-0
                        items-center
                        justify-between
                        border-t
                        border-slate-300/70

                        ${compact
                            ? "mt-3 pt-2"
                            : "mt-4 pt-3"
                        }
                    `}
                >

                    <p
                        className={`
                            font-semibold
                            uppercase
                            tracking-[0.15em]
                            text-slate-400

                            ${compact
                                ? "text-[6px]"
                                : "text-[9px]"
                            }
                        `}
                    >
                        School Life
                    </p>


                    <p
                        className={`
                            italic
                            text-slate-400

                            ${compact
                                ? "text-[7px]"
                                : "text-xs"
                            }
                        `}
                    >
                        Moments that matter
                    </p>

                </div>

            </div>

        </article>
    );
}