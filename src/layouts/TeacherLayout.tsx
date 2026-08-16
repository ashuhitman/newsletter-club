// import { useState } from "react";
// import { Menu } from "lucide-react";
// import { Outlet } from "react-router";

// import { useAppSelector } from "../app/hooks";
// import { TeacherSidebar } from "../components/layout/TeacherSidebar";


// export function TeacherLayout() {
//     const user = useAppSelector(
//         (state) => state.auth.user,
//     );

//     const [mobileOpen, setMobileOpen] = useState(false);

//     return (
//         <div className="min-h-screen bg-slate-50">
//             {/* Mobile Header */}
//             <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 lg:hidden">
//                 <button
//                     type="button"
//                     onClick={() => setMobileOpen(true)}
//                     aria-label="Open menu"
//                     className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100"
//                 >
//                     <Menu size={21} />
//                 </button>

//                 <div className="text-center">
//                     <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-600">
//                         PM SHRI GSSS
//                     </p>

//                     <p className="text-sm font-semibold text-slate-900">
//                         Teacher Portal
//                     </p>
//                 </div>

//                 <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
//                     {getInitials(user?.name)}
//                 </div>
//             </header>

//             <div className="flex min-h-[calc(100vh-4rem)] lg:min-h-screen">
//                 {/* Teacher Sidebar */}
//                 <TeacherSidebar
//                     mobileOpen={mobileOpen}
//                     onMobileClose={() => setMobileOpen(false)}
//                 />

//                 {/* Page Content */}
//                 <main className="min-w-0 flex-1">
//                     <div className="mx-auto w-full max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
//                         <Outlet />
//                     </div>
//                 </main>
//             </div>
//         </div>
//     );
// }

// function getInitials(name?: string) {
//     if (!name) {
//         return "T";
//     }

//     const parts = name
//         .trim()
//         .split(/\s+/)
//         .filter(Boolean);

//     if (parts.length === 1) {
//         return parts[0].slice(0, 2).toUpperCase();
//     }

//     return (
//         parts[0][0] +
//         parts[parts.length - 1][0]
//     ).toUpperCase();
// }