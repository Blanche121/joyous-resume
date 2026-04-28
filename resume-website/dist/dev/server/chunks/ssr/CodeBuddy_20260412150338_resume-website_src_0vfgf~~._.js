module.exports = [
"[project]/CodeBuddy/20260412150338/resume-website/src/data/profile.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 个人简历网站 - 基本配置文件
 * 
 * 修改此文件即可更新网站的基本信息
 * 网站名称、身份标签、简介等
 */ // 个人基本信息
__turbopack_context__.s([
    "navigation",
    ()=>navigation,
    "profile",
    ()=>profile
]);
const profile = {
    name: "吴思芃",
    nameEn: "Wusipeng",
    title: "数据科学本科生",
    subtitle: "数据分析 · 商业分析 · VibeCoding",
    subtitleExtra: "市场营销 · 运营管理",
    // 身份标签
    tags: [
        "Data Science Undergraduate",
        "Aspiring Data / Business Analyst",
        "VibeCoding Enthusiast",
        "Marketing & Operations"
    ],
    // 一句话简介
    summary: "香港中文大学（深圳）数据科学与大数据技术专业本科生，兼具数据分析能力与商业洞察力，专注于用数据驱动业务洞察与用户体验研究。资深游戏爱好者与深度社区参与者。",
    // 最早可实习时间
    earliestStartDate: "2026年5月",
    // 个人照片路径（放在 public/images 目录下）
    avatarPath: "/images/avatar.jpg",
    // GitHub 和 LinkedIn 占位
    githubUrl: "https://github.com/yourusername",
    linkedinUrl: "https://linkedin.com/in/yourprofile"
};
const navigation = [
    {
        label: "首页",
        href: "#home"
    },
    {
        label: "关于我",
        href: "#about"
    },
    {
        label: "教育背景",
        href: "#education"
    },
    {
        label: "经历",
        href: "#experience"
    },
    {
        label: "技能",
        href: "#skills"
    },
    {
        label: "作品集",
        href: "#portfolio"
    },
    {
        label: "AI能力",
        href: "#ai"
    },
    {
        label: "联系方式",
        href: "#contact"
    }
];
}),
"[project]/CodeBuddy/20260412150338/resume-website/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 工具函数
 */ // 合并类名的辅助函数
__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatDateRange",
    ()=>formatDateRange,
    "scrollToSection",
    ()=>scrollToSection
]);
function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}
function scrollToSection(href) {
    const element = document.querySelector(href);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}
function formatDateRange(start, end) {
    return `${start} - ${end}`;
}
}),
"[project]/CodeBuddy/20260412150338/resume-website/src/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/src/data/profile.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Navbar() {
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setIsScrolled(window.scrollY > 50);
            // 检测当前活动区域
            const sections = __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navigation"].map((item)=>item.href.replace("#", ""));
            for (const section of sections.reverse()){
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollToSection = (href)=>{
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
            setIsMobileMenuOpen(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].nav, {
                initial: {
                    y: -100
                },
                animate: {
                    y: 0
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between h-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                whileHover: {
                                    scale: 1.05
                                },
                                className: "text-xl font-bold text-slate-800",
                                children: "WSP"
                            }, void 0, false, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Navbar.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center space-x-1",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navigation"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scrollToSection(item.href),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-3 py-2 text-sm font-medium rounded-lg transition-colors", activeSection === item.href.replace("#", "") ? "text-blue-600 bg-blue-50" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"),
                                        children: item.label
                                    }, item.href, false, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Navbar.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Navbar.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                className: "md:hidden p-2 text-slate-600 hover:text-slate-900",
                                children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Navbar.tsx",
                                    lineNumber: 89,
                                    columnNumber: 35
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Navbar.tsx",
                                    lineNumber: 89,
                                    columnNumber: 53
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Navbar.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Navbar.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Navbar.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Navbar.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: false,
                animate: {
                    height: isMobileMenuOpen ? "auto" : 0,
                    opacity: isMobileMenuOpen ? 1 : 0
                },
                className: "fixed top-16 left-0 right-0 z-40 bg-white shadow-lg md:hidden overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-4 space-y-2",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navigation"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>scrollToSection(item.href),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("block w-full text-left px-4 py-3 rounded-lg transition-colors", activeSection === item.href.replace("#", "") ? "text-blue-600 bg-blue-50" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"),
                            children: item.label
                        }, item.href, false, {
                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Navbar.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Navbar.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Navbar.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/CodeBuddy/20260412150338/resume-website/src/data/contact.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 联系方式数据
 * 
 * 修改此文件即可更新联系方式
 * 注意：请根据需要选择是否公开敏感信息
 */ __turbopack_context__.s([
    "contact",
    ()=>contact,
    "contactTagline",
    ()=>contactTagline
]);
const contact = {
    phone: {
        show: true,
        value: "19200704947",
        icon: "Phone",
        label: "电话"
    },
    email: {
        show: true,
        value: "19200704947@163.com",
        link: "mailto:19200704947@163.com",
        icon: "Mail",
        label: "邮箱"
    },
    wechat: {
        show: true,
        value: "joyousWu808",
        icon: "MessageCircle",
        label: "微信"
    },
    xiaohongshu: {
        show: true,
        value: "小红书 · 18.8K 赞藏",
        link: "https://xhslink.com/m/92Gc3b10oVv",
        icon: "Xiaohongshu",
        label: "小红书"
    }
};
const contactTagline = "欢迎联系我进行交流合作，无论是数据分析项目、游戏研究讨论还是职业机会，我都很乐意与您沟通。";
}),
"[project]/CodeBuddy/20260412150338/resume-website/src/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/src/data/profile.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$contact$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/src/data/contact.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Footer() {
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-slate-900 text-white py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold mb-2",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].name
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Footer.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400 text-sm",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].subtitle
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Footer.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Footer.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider",
                                    children: "快速链接"
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Footer.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm text-slate-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#about",
                                                className: "hover:text-white transition-colors",
                                                children: "关于我"
                                            }, void 0, false, {
                                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Footer.tsx",
                                                lineNumber: 28,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Footer.tsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#portfolio",
                                                className: "hover:text-white transition-colors",
                                                children: "作品集"
                                            }, void 0, false, {
                                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Footer.tsx",
                                                lineNumber: 33,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Footer.tsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#contact",
                                                className: "hover:text-white transition-colors",
                                                children: "联系方式"
                                            }, void 0, false, {
                                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Footer.tsx",
                                                lineNumber: 38,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Footer.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Footer.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Footer.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider",
                                    children: "社交媒体"
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Footer.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-4",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$contact$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contact"].xiaohongshu.show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$contact$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contact"].xiaohongshu.link,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-slate-400 hover:text-white transition-colors",
                                            title: "小红书",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Footer.tsx",
                                                lineNumber: 59,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Footer.tsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$contact$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contact"].email.show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$contact$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contact"].email.link,
                                            className: "text-slate-400 hover:text-white transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Footer.tsx",
                                                lineNumber: 67,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Footer.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Footer.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Footer.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Footer.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "© ",
                                currentYear,
                                " ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].name,
                                ". All rights reserved."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Footer.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1",
                            children: "Built with Next.js & Tailwind CSS"
                        }, void 0, false, {
                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Footer.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Footer.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Footer.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Footer.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/CodeBuddy/20260412150338/resume-website/src/components/SectionTitle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionTitle",
    ()=>SectionTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function SectionTitle({ title, subtitle, centered = true, light = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.5
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mb-12", centered && "text-center"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-3xl font-bold mb-3", light ? "text-white" : "text-slate-800"),
                children: title
            }, void 0, false, {
                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/SectionTitle.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg max-w-2xl", centered && "mx-auto", light ? "text-slate-300" : "text-slate-600"),
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/SectionTitle.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500", centered && "mx-auto")
            }, void 0, false, {
                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/SectionTitle.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/SectionTitle.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/src/data/profile.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Hero() {
    const scrollToSection = (href)=>{
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        className: "min-h-screen flex items-center justify-center relative overflow-hidden pt-16",
        style: {
            background: `
          linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 25%, #fce7f3 50%, #fbcfe8 75%, #f9a8d4 100%)
        `
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-20 -left-32 w-[500px] h-[500px] rounded-full opacity-25",
                        style: {
                            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, transparent 70%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-25",
                        style: {
                            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-15",
                        style: {
                            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full opacity-15",
                        style: {
                            background: 'radial-gradient(circle, rgba(219, 39, 119, 0.3) 0%, transparent 70%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/4 right-1/6 w-4 h-4 rounded-full bg-sky-400 opacity-40"
                    }, void 0, false, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1/3 left-1/6 w-3 h-3 rounded-full bg-pink-400 opacity-30"
                    }, void 0, false, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-blue-400 opacity-50"
                    }, void 0, false, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1/4 right-1/3 w-5 h-5 rounded-full bg-rose-300 opacity-25"
                    }, void 0, false, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-[0.02]",
                        style: {
                            backgroundImage: `
              linear-gradient(rgba(14, 165, 233, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 72, 153, 0.5) 1px, transparent 1px)
            `,
                            backgroundSize: '60px 60px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 gap-12 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -50
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.6
                            },
                            className: "order-2 lg:order-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2 mb-6",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].tags.map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                            initial: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                delay: 0.2 + index * 0.1
                                            },
                                            className: "px-3 py-1 text-sm bg-white/70 text-sky-700 rounded-full font-medium backdrop-blur-sm shadow-sm",
                                            children: tag
                                        }, tag, false, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.3
                                    },
                                    className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-4",
                                    children: [
                                        "你好，我是",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sky-600",
                                            children: [
                                                " ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.4
                                    },
                                    className: "text-xl text-slate-600 mb-2",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].subtitle
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].subtitleExtra && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.45
                                    },
                                    className: "text-lg text-slate-500 mb-6",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].subtitleExtra
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.5
                                    },
                                    className: "text-slate-600 mb-8 max-w-lg leading-relaxed",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].summary
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.6
                                    },
                                    className: "flex flex-wrap gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>scrollToSection("#portfolio"),
                                            className: "group px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-all flex items-center gap-2 shadow-lg shadow-sky-600/30",
                                            children: [
                                                "查看作品集",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: 18,
                                                    className: "group-hover:translate-x-1 transition-transform"
                                                }, void 0, false, {
                                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>scrollToSection("#contact"),
                                            className: "px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-medium hover:border-slate-400 hover:bg-slate-50 transition-all flex items-center gap-2",
                                            children: "联系我"
                                        }, void 0, false, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.8
                                    },
                                    className: "mt-6 text-base font-bold text-slate-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                                lineNumber: 177,
                                                columnNumber: 17
                                            }, this),
                                            "最早可实习时间：",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].earliestStartDate
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.85
                                    },
                                    className: "mt-1 text-base font-bold text-slate-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                                lineNumber: 188,
                                                columnNumber: 17
                                            }, this),
                                            "可实习周期：3-6个月"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: 50
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.6
                            },
                            className: "order-1 lg:order-2 flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full bg-cover bg-center",
                                            style: {
                                                backgroundImage: "url('/images/avatar.jpg')",
                                                backgroundPosition: "center 20%" // 向上偏移，展示头部和上半身
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                            lineNumber: 204,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-4 -right-4 w-24 h-24 bg-sky-400/30 rounded-full blur-2xl"
                                    }, void 0, false, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400/30 rounded-full blur-2xl"
                                    }, void 0, false, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            y: [
                                                0,
                                                -10,
                                                0
                                            ]
                                        },
                                        transition: {
                                            duration: 3,
                                            repeat: Infinity
                                        },
                                        className: "absolute -top-6 -left-6 px-4 py-2 bg-white rounded-full shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-slate-700",
                                            children: "数据科学"
                                        }, void 0, false, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                            lineNumber: 223,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            y: [
                                                0,
                                                10,
                                                0
                                            ]
                                        },
                                        transition: {
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: 1
                                        },
                                        className: "absolute -top-6 -right-6 px-4 py-2 bg-white rounded-full shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-slate-700",
                                            children: "游戏洞察"
                                        }, void 0, false, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                            lineNumber: 230,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            y: [
                                                0,
                                                10,
                                                0
                                            ]
                                        },
                                        transition: {
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: 0.5
                                        },
                                        className: "absolute -bottom-4 -left-6 px-4 py-2 bg-white rounded-full shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-slate-700",
                                            children: "数据分析"
                                        }, void 0, false, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            y: [
                                                0,
                                                -10,
                                                0
                                            ]
                                        },
                                        transition: {
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: 1.5
                                        },
                                        className: "absolute -bottom-4 -right-6 px-4 py-2 bg-white rounded-full shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-slate-700",
                                            children: "AI in Business"
                                        }, void 0, false, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Hero.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/CodeBuddy/20260412150338/resume-website/src/data/education.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 教育背景数据
 * 
 * 修改此文件即可更新教育背景信息
 */ // 教育经历
__turbopack_context__.s([
    "education",
    ()=>education
]);
const education = [
    {
        school: "香港中文大学（深圳）",
        schoolEn: "The Chinese University of Hong Kong, Shenzhen",
        degree: "理学学士",
        degreeEn: "Bachelor of Science",
        major: "数据科学与大数据技术",
        majorEn: "Data Science and Big Data Technology",
        startDate: "2023年9月",
        endDate: "2027年3月",
        gpa: "3.2/4.0",
        courses: [
            "Data Structures and Algorithms",
            "Probability and Statistics",
            "Machine Learning",
            "Database Systems",
            "Optimization",
            "AI Programming",
            "Operations Management",
            "Marketing Management",
            "Digital Marketing / Big Data Marketing"
        ]
    }
];
}),
"[project]/CodeBuddy/20260412150338/resume-website/src/components/About.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "About",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-ssr] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/src/components/SectionTitle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$education$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/src/data/education.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function About() {
    const edu = __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$education$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["education"][0];
    const scrollToSection = (href)=>{
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    const highlights = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
            title: "专业定位",
            description: "专注于数据分析与商业分析，具备扎实的统计学基础与项目实践经验",
            href: "#exp-work-1"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
            title: "独特视角",
            description: "兼具技术能力与内容洞察，对游戏产品、用户体验、内容生态有深入理解",
            href: "#portfolio"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            title: "协作能力",
            description: "丰富的校园组织经验，具备跨团队沟通与项目推进能力",
            href: "#leadership"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "py-20 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionTitle"], {
                    title: "关于我",
                    subtitle: "了解我的背景与定位"
                }, void 0, false, {
                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/About.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -30
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-sky-50 to-pink-50 rounded-2xl p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-slate-800 mb-4",
                                        children: edu.school
                                    }, void 0, false, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/About.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-600 mb-4",
                                        children: [
                                            edu.degree,
                                            " · ",
                                            edu.major
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/About.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-500 mb-6",
                                        children: [
                                            edu.startDate,
                                            " – ",
                                            edu.endDate
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/About.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-slate-200 pt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wider",
                                                children: "核心课程"
                                            }, void 0, false, {
                                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/About.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: [
                                                    "数据结构与算法",
                                                    "概率与统计",
                                                    "机器学习",
                                                    "数据库系统",
                                                    "最优化",
                                                    "AI编程",
                                                    "运营管理",
                                                    "市场营销管理",
                                                    "数字营销",
                                                    "大数据营销"
                                                ].map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-3 py-1.5 bg-sky-50 rounded-full text-sm text-sky-700 border border-sky-200",
                                                        children: course
                                                    }, course, false, {
                                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/About.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/About.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/About.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/About.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/About.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: highlights.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: 30
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.5,
                                        delay: index * 0.1
                                    },
                                    className: "bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer",
                                    onClick: ()=>scrollToSection(item.href),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 bg-sky-50 rounded-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                    className: "w-6 h-6 text-sky-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/About.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/About.tsx",
                                                lineNumber: 100,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-slate-800 mb-1",
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/About.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-600 text-sm leading-relaxed",
                                                        children: item.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/About.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/About.tsx",
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/About.tsx",
                                        lineNumber: 99,
                                        columnNumber: 17
                                    }, this)
                                }, item.title, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/About.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/About.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/About.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/About.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/About.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Education",
    ()=>Education
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/src/components/SectionTitle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$education$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/src/data/education.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Education() {
    const edu = __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$education$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["education"][0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "education",
        className: "py-20 bg-slate-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionTitle"], {
                    title: "教育背景",
                    subtitle: "学术基础与专业知识"
                }, void 0, false, {
                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.5
                        },
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 to-pink-500"
                            }, void 0, false, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative pl-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-6 top-6 w-4 h-4 bg-sky-500 rounded-full border-4 border-white shadow-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-48 bg-cover bg-center",
                                                style: {
                                                    backgroundImage: "url('/images/校园.png')"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                                lineNumber: 38,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-2 bg-sky-50 rounded-lg",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                                                    className: "w-6 h-6 text-sky-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                                                    lineNumber: 48,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                                                lineNumber: 47,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-xl font-bold text-slate-800",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: "https://www.cuhk.edu.cn",
                                                                            target: "_blank",
                                                                            rel: "noopener noreferrer",
                                                                            className: "hover:text-sky-600 transition-colors",
                                                                            children: edu.school
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                                                            lineNumber: 52,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                                                        lineNumber: 51,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-slate-500 text-sm",
                                                                        children: edu.schoolEn
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                                                        lineNumber: 61,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                                                lineNumber: 50,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                                        lineNumber: 46,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-700",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold",
                                                                        children: edu.degree
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                                                        lineNumber: 68,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-slate-400 mx-2",
                                                                        children: "·"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                                                        lineNumber: 69,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "https://sds.cuhk.edu.cn/",
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        className: "hover:text-sky-600 transition-colors",
                                                                        children: edu.major
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                                                        lineNumber: 70,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                                                lineNumber: 67,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-slate-500 text-sm",
                                                                children: edu.majorEn
                                                            }, void 0, false, {
                                                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                                                lineNumber: 79,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-4 mb-6 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-3 py-1 bg-slate-100 rounded-full text-slate-600",
                                                                children: [
                                                                    edu.startDate,
                                                                    " – ",
                                                                    edu.endDate
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                                                lineNumber: 84,
                                                                columnNumber: 21
                                                            }, this),
                                                            edu.gpa && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-3 py-1 bg-green-50 rounded-full text-green-700 flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                                                        lineNumber: 89,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "GPA: ",
                                                                    edu.gpa
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                                                lineNumber: 88,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                                lineNumber: 44,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-8 pb-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wider",
                                                        children: "核心课程"
                                                    }, void 0, false, {
                                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2",
                                                        children: edu.courses.map((course, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                                                initial: {
                                                                    opacity: 0,
                                                                    scale: 0.9
                                                                },
                                                                whileInView: {
                                                                    opacity: 1,
                                                                    scale: 1
                                                                },
                                                                viewport: {
                                                                    once: true
                                                                },
                                                                transition: {
                                                                    delay: index * 0.05
                                                                },
                                                                className: "px-3 py-1.5 bg-gradient-to-r from-sky-50 to-pink-50 rounded-full text-sm text-slate-600 border border-slate-200",
                                                                children: course
                                                            }, course, false, {
                                                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                                                lineNumber: 103,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Education.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/CodeBuddy/20260412150338/resume-website/src/data/experience.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 实习与研究经历数据
 * 
 * 修改此文件即可更新经历信息
 */ __turbopack_context__.s([
    "experiences",
    ()=>experiences
]);
const experiences = [
    {
        id: "internship-1",
        type: "work",
        title: "投资部实习生（数据分析方向）",
        organization: "深创投",
        location: "深圳",
        startDate: "2025年5月",
        endDate: "2025年8月",
        highlights: [
            "数据整合：使用 Excel、Python、MySQL 整合仓储物流项目合同、行业资料及租赁数据，围绕租金单价、出租率等指标完成清洗与结构化处理，并对约 200份合同及资料开展异常值排查，识别租金异常、面积与金额不匹配问题。",
            "交叉验证与分析：基于 Wind、企查查、Excel、Python 对区域租金水平，空置率、股权结构等数据进行交叉验证结果呈现，支持项目研判并推动第一阶段分析提前一周完成。",
            "结果呈现：使用 Excel、Word、PPT 完成图表化展示与可视化汇报，围绕城市/园区对比、物流需求热度等输出 4页核心分析内容，用于项目汇报、方案沟通与管理层决策支持。"
        ],
        technologies: [
            "Excel",
            "Python",
            "SQL",
            "Wind",
            "企查查",
            "PowerPoint"
        ]
    },
    {
        id: "research-1",
        type: "research",
        title: "项目组长（数据建模+可视化分析）",
        organization: "大数据营销 | 《订阅计划对客户购买行为的影响：跨不同群体的异质效应》",
        location: "香港中文大学（深圳）",
        startDate: "2025年9月",
        endDate: "2025年12月",
        highlights: [
            "数据处理：使用SQL + Python完成高维原始订单数据抽取、特征拼接与缺失值处理，并结合Random Forest进行机器学习加权，构建覆盖 24个月、1,000名用户数据集，使关键协变量的 SMD 降至 0.05 左右。",
            "因果建模：使用 Python 搭建 DID + 双向固定效应 + GRF/IPTW 分析框架，识别订阅计划对消费行为的影响，结果显示用户 总消费额提升 2.54、购买频次提升 0.23。",
            "数据可视化：基于Python构建 DDD + log-log OLS分群与价格敏感度模型，输出分组趋势图与增长率对比图，发现FMCG用户订阅后消费增长率和购买频次增长率分别达10.22% 和 8.95%，显著高于DCG用户。"
        ],
        technologies: [
            "Python",
            "R",
            "Stata",
            "Tableau"
        ]
    },
    {
        id: "research-2",
        type: "research",
        title: "项目组长（数据整合+反向测试优化）",
        organization: "商业应用中的AI编程 | SilverShield 老年人保险智能推荐平台",
        location: "香港中文大学（深圳）",
        startDate: "2026年1月",
        endDate: "至今",
        highlights: [
            "数据清洗与规则设计：使用Python + MySQL主导多源保险产品数据的收集、清洗与结构化处理，设计基于规则的推荐逻辑，实现用户风险画像与保险产品的匹配，提升信息整合与筛选效率。",
            "AI 辅助开发与系统落地：结合 CodeBuddy 辅助前端界面搭建与功能开发，推动推荐系统的快速落地。",
            "结果验证与反向优化：负责 Demo 阶段的数据测试与结果分析，验证模型输出的合理性，并基于测试结果持续优化推荐策略与模型表现，增强推荐准确性和用户决策支持价值。"
        ],
        technologies: [
            "Python",
            "MySQL",
            "CodeBuddy"
        ]
    },
    {
        id: "research-3",
        type: "research",
        title: "建模手 / 代码手",
        organization: "2026 MCM/ICM（美赛）| Problem D Sports Team Decision Modeling",
        location: "香港中文大学（深圳）",
        startDate: "2026年1月",
        endDate: "2026年2月",
        highlights: [
            "动态建模：使用 Python 基于 动态规划（Bellman Equation） 搭建球队多赛季决策模型，量化竞技表现、品牌价值与预算约束对长期收益的影响，并验证竞争强度与胜率在 β∈[0.05,0.25] 区间内稳定正相关。",
            "数据处理与指标构建：使用MySQL整合 2022–2025 赛季多源球队与球员数据，完成合并、筛选与缺失值填补，并基于 WS/40 + Logistic Model 构建球员竞争价值评估体系，校准得到 α=-1.7447、β=0.0825。",
            "优化分析：基于球员价值指标，使用 Python 构建 Mixed-Integer Programming 球员选择模型，在预算与阵容约束下实现最优配置；结果显示核心球员选择在商业权重 β∈[0,2] 范围内保持稳定，模型具备较强鲁棒性。",
            "情景分析：使用Python + Office对球队强度、胜率变化、参数敏感性及伤病冲击结果进行可视化展示，输出趋势图、敏感性曲线与情景模拟图；结果显示核心球员完全缺阵时，球队商业收入损失可达票务收入损失的 2.3 倍。"
        ],
        technologies: [
            "Python",
            "MySQL",
            "Office"
        ]
    },
    {
        id: "personal-1",
        type: "personal",
        title: "小红书个人账号运营",
        titleLink: "https://xhslink.com/m/92Gc3b10oVv",
        organization: "小红书 · 深度游戏社区参与者",
        startDate: "2025年5月",
        endDate: "至今",
        highlights: [
            "多款游戏深度玩家和社区参与者",
            "仅半年时间小红书《恋与深空》相关账号粉丝数 600+，获赞与收藏数 1.8万+",
            "相关同人文作品浏览量累计 2 万+，获赞量累计 3000+"
        ]
    }
];
}),
"[project]/CodeBuddy/20260412150338/resume-website/src/data/leadership.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 校园与组织经历数据
 * 
 * 修改此文件即可更新校园经历展示
 */ __turbopack_context__.s([
    "leadershipExperiences",
    ()=>leadershipExperiences
]);
const leadershipExperiences = [
    {
        id: "leadership-0",
        title: "学生代表",
        organization: "香港中文大学（深圳）学代会",
        startDate: "2023年10月",
        endDate: "2024年5月",
        responsibilities: [
            "加入厚含书院建设议题小组，参与新书院建设工作",
            "与书院入住商家沟通，说服天猫超市引入热食，成功解决书院学生来不及吃早餐问题",
            "加入校巴运营与大运专线议题小组，主要负责解决校巴线路更新问题",
            "通过问卷制作与数据统计，协助学校建立学校——大运站两点巴士专线",
            "荣获2023-2024年度优秀学生代表"
        ]
    },
    {
        id: "leadership-1",
        title: "厚含书院班长",
        organization: "香港中文大学（深圳）厚含书院",
        startDate: "2023年9月",
        endDate: "至今",
        responsibilities: [
            "组织班级活动，处理学生事务",
            "协调师生沟通，反馈学生需求",
            "多次处理紧急状况，培养应变能力"
        ]
    },
    {
        id: "leadership-2",
        title: "学生组织秘书",
        organization: "数据科学学院学生组织",
        startDate: "2024年9月",
        endDate: "至今",
        responsibilities: [
            "撰写中英双语通知及正式邮件",
            "处理学生信息与管理文档",
            "协调跨部门沟通与活动组织",
            "制定工作流程，提升组织效率"
        ]
    }
];
}),
"[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Experience",
    ()=>Experience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/src/components/SectionTitle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$experience$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/src/data/experience.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$leadership$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/src/data/leadership.ts [app-ssr] (ecmascript)");
"use client";
"use client";
;
;
;
;
;
;
function ExperienceCard({ exp, index }) {
    const getTypeColor = ()=>{
        switch(exp.type){
            case "work":
                return {
                    bg: "bg-sky-50",
                    text: "text-sky-600",
                    border: "hover:border-sky-200"
                };
            case "research":
                return {
                    bg: "bg-purple-50",
                    text: "text-purple-600",
                    border: "hover:border-purple-200"
                };
            case "personal":
                return {
                    bg: "bg-pink-50",
                    text: "text-pink-600",
                    border: "hover:border-pink-200"
                };
            default:
                return {
                    bg: "bg-blue-50",
                    text: "text-blue-600",
                    border: "hover:border-blue-200"
                };
        }
    };
    const typeColors = getTypeColor();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            x: -30
        },
        whileInView: {
            opacity: 1,
            x: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.5,
            delay: index * 0.1
        },
        className: `bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all ${typeColors.border}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            exp.organization === "深创投" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/images/深创投logo.png",
                                alt: "深创投",
                                className: "w-10 h-10 rounded-lg object-contain"
                            }, void 0, false, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-2 ${typeColors.bg} rounded-lg`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                    className: `w-5 h-5 ${typeColors.text}`
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    exp.organizationLink ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: exp.organizationLink,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "font-bold text-lg text-slate-800 hover:text-sky-600 transition-colors flex items-center gap-1",
                                        children: [
                                            exp.organization,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-sky-500",
                                                children: "↗"
                                            }, void 0, false, {
                                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                                lineNumber: 60,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-lg text-slate-800",
                                        children: exp.organization
                                    }, void 0, false, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 text-sm mt-0.5",
                                        children: exp.title
                                    }, void 0, false, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `px-3 py-1 ${typeColors.bg} ${typeColors.text} rounded-full text-xs font-medium`,
                        children: exp.type === "work" ? "实习" : exp.type === "research" && exp.organization.includes("MCM/ICM") ? "竞赛" : exp.type === "research" ? "研究" : "个人"
                    }, void 0, false, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-3 mb-4 text-sm text-slate-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            exp.startDate,
                            " – ",
                            exp.endDate
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    exp.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            exp.location
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-2",
                children: exp.highlights.map((highlight, i)=>{
                    const colonIndex = highlight.indexOf('：');
                    const prefix = colonIndex > 0 ? highlight.substring(0, colonIndex + 1) : highlight;
                    const suffix = colonIndex > 0 ? highlight.substring(colonIndex + 1) : '';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-start gap-2 text-slate-600 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                lineNumber: 95,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-slate-800",
                                        children: prefix
                                    }, void 0, false, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this),
                                    suffix
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                        lineNumber: 94,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            exp.technologies && exp.technologies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 pt-4 border-t border-slate-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: exp.technologies.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs",
                            children: tech
                        }, tech, false, {
                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                            lineNumber: 110,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                    lineNumber: 108,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
function LeadershipCard({ item, index }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            x: 30
        },
        whileInView: {
            opacity: 1,
            x: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.5,
            delay: index * 0.1
        },
        className: "bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 bg-purple-50 rounded-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                            className: "w-5 h-5 text-purple-600"
                        }, void 0, false, {
                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-semibold text-slate-800",
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-600 text-sm",
                                children: item.organization
                            }, void 0, false, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 mb-4 text-sm text-slate-500",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        item.startDate,
                        " – ",
                        item.endDate
                    ]
                }, void 0, true, {
                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-2",
                children: item.responsibilities.map((resp, i)=>{
                    const colonIndex = resp.indexOf('：');
                    const prefix = colonIndex > 0 ? resp.substring(0, colonIndex + 1) : resp;
                    const suffix = colonIndex > 0 ? resp.substring(colonIndex + 1) : '';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-start gap-2 text-slate-600 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1.5 w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-slate-800",
                                        children: prefix
                                    }, void 0, false, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                        lineNumber: 159,
                                        columnNumber: 17
                                    }, this),
                                    suffix
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                lineNumber: 158,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                        lineNumber: 156,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
function Experience() {
    const workExperiences = __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$experience$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["experiences"].filter((e)=>e.type === "work");
    const researchExperiences = __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$experience$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["experiences"].filter((e)=>e.type === "research");
    const personalExperiences = __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$experience$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["experiences"].filter((e)=>e.type === "personal");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "experience",
        className: "py-20 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionTitle"], {
                    title: "经历",
                    subtitle: "实习经历与研究项目"
                }, void 0, false, {
                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-slate-800 mb-6 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                            className: "w-5 h-5 text-sky-600"
                                        }, void 0, false, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, this),
                                        "实习经历"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-6",
                                    children: workExperiences.map((exp, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            id: index === 0 ? "exp-work-1" : undefined,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExperienceCard, {
                                                exp: exp,
                                                index: index
                                            }, void 0, false, {
                                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                                lineNumber: 193,
                                                columnNumber: 19
                                            }, this)
                                        }, exp.id, false, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-slate-800 mb-6 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                            className: "w-5 h-5 text-purple-600"
                                        }, void 0, false, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                            lineNumber: 202,
                                            columnNumber: 15
                                        }, this),
                                        "研究项目"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-6",
                                    children: researchExperiences.map((exp, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExperienceCard, {
                                            exp: exp,
                                            index: index
                                        }, exp.id, false, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-slate-800 mb-6 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                            className: "w-5 h-5 text-pink-600"
                                        }, void 0, false, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                            lineNumber: 215,
                                            columnNumber: 15
                                        }, this),
                                        "个人账号运营"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-6",
                                    children: personalExperiences.map((exp, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExperienceCard, {
                                            exp: exp,
                                            index: index
                                        }, exp.id, false, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                            lineNumber: 220,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "leadership",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-slate-800 mb-6 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                            className: "w-5 h-5 text-amber-600"
                                        }, void 0, false, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this),
                                        "校园与组织经历"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 gap-6",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$leadership$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["leadershipExperiences"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LeadershipCard, {
                                            item: item,
                                            index: index
                                        }, item.id, false, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                            lineNumber: 233,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
            lineNumber: 177,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Experience.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
}),
"[project]/CodeBuddy/20260412150338/resume-website/src/data/skills.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 技能数据
 * 
 * 修改此文件即可更新技能展示
 */ __turbopack_context__.s([
    "skills",
    ()=>skills
]);
const skills = [
    {
        title: "技术技能",
        icon: "Code",
        skills: [
            "Python",
            "SQL",
            "R",
            "Excel",
            "MATLAB"
        ]
    },
    {
        title: "分析技能",
        icon: "BarChart3",
        skills: [
            "数据清洗",
            "结构化分析",
            "基础建模",
            "数据可视化",
            "商业洞察提取",
            "研究框架设计"
        ]
    },
    {
        title: "AI 工具",
        icon: "Sparkles",
        skills: [
            "CodeBuddy",
            "ChatGPT",
            "DeepSeek",
            "豆包",
            "GitHub Copilot"
        ]
    },
    {
        title: "语言能力",
        icon: "Globe",
        skills: [
            "中文 (母语)",
            "English (IELTS 7.0)"
        ]
    }
];
}),
"[project]/CodeBuddy/20260412150338/resume-website/src/components/Skills.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skills",
    ()=>Skills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/code.js [app-ssr] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/src/components/SectionTitle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$skills$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/src/data/skills.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const iconMap = {
    Code: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"],
    BarChart3: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
    Sparkles: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
    Globe: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
};
// 技能评分数据
const skillRatings = {
    Python: 8,
    SQL: 7,
    R: 7,
    Excel: 8,
    MATLAB: 7
};
// 颜色配置
const barColors = [
    "bg-sky-500",
    "bg-orange-400",
    "bg-rose-400",
    "bg-emerald-400",
    "bg-pink-400"
];
function SkillBar({ skill, index }) {
    const rating = skillRatings[skill] || 5;
    const percentage = rating / 10 * 100;
    const color = barColors[index % barColors.length];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-3 last:mb-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-1.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-medium text-slate-700",
                    children: skill
                }, void 0, false, {
                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Skills.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Skills.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-2.5 bg-slate-100 rounded-full overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        width: 0
                    },
                    whileInView: {
                        width: `${percentage}%`
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: "easeOut"
                    },
                    className: `h-full rounded-full ${color}`
                }, void 0, false, {
                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Skills.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Skills.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Skills.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
function SkillBadge({ skill }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-sky-50 hover:text-sky-600 transition-colors cursor-default",
        children: skill
    }, void 0, false, {
        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Skills.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
function Skills() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "skills",
        className: "py-20 bg-slate-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionTitle"], {
                    title: "技能",
                    subtitle: "专业能力与技术栈"
                }, void 0, false, {
                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Skills.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$skills$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["skills"].map((category, index)=>{
                        const Icon = iconMap[category.icon] || __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"];
                        const isTechnical = category.title === "技术技能";
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5,
                                delay: index * 0.1
                            },
                            className: "bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 bg-gradient-to-br from-sky-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "w-6 h-6 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Skills.tsx",
                                        lineNumber: 90,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Skills.tsx",
                                    lineNumber: 89,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-slate-800 mb-4",
                                    children: category.title
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Skills.tsx",
                                    lineNumber: 94,
                                    columnNumber: 17
                                }, this),
                                isTechnical ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: category.skills.map((skill, skillIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkillBar, {
                                            skill: skill,
                                            index: skillIndex
                                        }, skill, false, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Skills.tsx",
                                            lineNumber: 100,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Skills.tsx",
                                    lineNumber: 98,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: category.skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SkillBadge, {
                                            skill: skill
                                        }, skill, false, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Skills.tsx",
                                            lineNumber: 106,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Skills.tsx",
                                    lineNumber: 104,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, category.title, true, {
                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Skills.tsx",
                            lineNumber: 80,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Skills.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Skills.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Skills.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}),
"[project]/CodeBuddy/20260412150338/resume-website/src/data/portfolio.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 作品集数据
 * 
 * 修改此文件即可更新作品集展示
 * 分为 Data/Research 和 Game/Content 两个板块
 */ __turbopack_context__.s([
    "portfolioItems",
    ()=>portfolioItems
]);
const portfolioItems = [
    // ========== Data / Research Portfolio ==========
    {
        id: "project-1",
        category: "data",
        title: "订阅计划对客户购买行为的影响研究",
        description: "基于回归分析与双重差分法，研究订阅计划对不同客户群体购买行为的异质效应，探讨用户分群视角下的消费行为差异。",
        tags: [
            "Python",
            "R",
            "回归分析",
            "DID",
            "用户分群"
        ],
        role: "项目组组长",
        featured: true,
        links: {
            pdf: "/documents/MKT4220_Team2_Project_Report.pdf"
        },
        pdfLabel: "全英论文"
    },
    {
        id: "project-3",
        category: "data",
        title: "老年人风险评估与养老保险定制化推荐",
        description: "使用CodeBuddy开发的全栈项目，为老年人提供风险评估与个性化养老保险方案推荐。",
        tags: [
            "React",
            "Node.js",
            "AI Coding",
            "自动化工作流",
            "保险分析"
        ],
        role: "全栈开发+AI Coding+自动化工作流",
        links: {
            demo: "https://silver-gaurd.netlify.app"
        },
        demoLabel: "SilverGaurd网站"
    },
    {
        id: "project-4",
        category: "data",
        title: "2026 MCM/ICM（美赛）| Problem D Sports Team Decision Modeling",
        description: "以 WNBA 球队经营为场景，构建融合动态规划、球员价值评估与优化决策的分析框架，量化竞技表现、商业价值与伤病风险对球队长期收益的影响。",
        tags: [
            "动态建模",
            "最优化",
            "情景模拟",
            "Python",
            "MySQL"
        ],
        role: "数据建模",
        links: {
            pdf: "/documents/2628311.pdf"
        },
        pdfLabel: "美赛论文"
    },
    // ========== Game / Content Portfolio ==========
    {
        id: "xhs-1",
        category: "game",
        title: "小红书游戏内容账号",
        description: "专注恋与深空游戏内容创作，分享游戏日常与同人文产出。通过有温度的内容与粉丝互动，打造具有影响力的游戏社区账号。",
        tags: [
            "粉丝 650+",
            "获赞收藏 1.9万+"
        ],
        featured: true,
        links: {
            xhs: "https://xhslink.com/m/92Gc3b10oVv",
            pdf: "/documents/账号运营思路.pdf"
        },
        pdfLabel: "下载附件（具体运营思路）"
    },
    {
        id: "fic-1",
        category: "game",
        title: "同人文创作节选",
        description: "至今同人文创作20万字+，持续活跃更新。附件为个人长篇同人文《星河散落》两章终章+番外《自星河归来》。",
        tags: [
            "同人文创作",
            "星河散落",
            "持续更新"
        ],
        featured: true,
        links: {
            pdf: "/documents/同人文作品节选（《星河散落》46-47+《番外：自星河归来》）.pdf"
        },
        pdfLabel: "下载附件"
    },
    {
        id: "game-2",
        category: "game",
        title: "恋与深空游戏体验及内容洞察",
        description: "恋爱互动3D养成类游戏，2年高投入用户体验。分析付费用户行为模式与社区生态。",
        tags: [
            "用户洞察",
            "付费行为",
            "社区运营"
        ],
        featured: true,
        links: {
            pdf: "/documents/恋与深空_玩家视角游戏分析.pdf"
        }
    },
    {
        id: "game-1",
        category: "game",
        title: "原神游戏体验与内容洞察",
        description: "Open World RPG，3年游戏经验，对角色养成、版本活动、地图探索有深入理解。从用户体验角度分析游戏设计。",
        tags: [
            "用户体验",
            "游戏分析",
            "内容理解"
        ],
        featured: true,
        links: {
            pdf: "/documents/原神个人游戏体验.pdf"
        }
    }
];
}),
"[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Portfolio",
    ()=>Portfolio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-ssr] (ecmascript) <export default as Gamepad2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-ssr] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/src/components/SectionTitle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/src/data/portfolio.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function PortfolioCard({ item }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        initial: {
            opacity: 0,
            scale: 0.9
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        exit: {
            opacity: 0,
            scale: 0.9
        },
        className: `bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all group cursor-pointer ${item.category === "data" ? "hover:border-sky-200" : "hover:border-pink-200"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-2 rounded-lg", item.category === "data" ? "bg-sky-50" : "bg-pink-50"),
                                children: item.category === "data" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                    className: "w-5 h-5 text-sky-600"
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this) : item.links?.xhs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                    className: "w-5 h-5 text-pink-600"
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"], {
                                    className: "w-5 h-5 text-pink-600"
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: `font-semibold text-slate-800 group-hover:text-sky-600 transition-colors ${item.category === "game" ? "group-hover:text-pink-600" : ""}`,
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this),
                                    item.role && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 text-sm",
                                        children: item.role
                                    }, void 0, false, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    item.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2 py-1 bg-amber-50 text-amber-600 rounded text-xs font-medium",
                        children: "精选"
                    }, void 0, false, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-600 text-sm mb-4 leading-relaxed",
                children: item.description
            }, void 0, false, {
                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2 mb-4",
                children: item.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1 rounded text-xs", item.category === "data" ? "bg-sky-50 text-sky-600" : "bg-pink-50 text-pink-600"),
                        children: tag
                    }, tag, false, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            item.links && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-3 pt-4 border-t border-slate-100",
                children: [
                    item.links.xhs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: item.links.xhs,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-lg transition-colors", item.category === "game" ? "bg-pink-50 text-pink-600 hover:bg-pink-100" : "bg-sky-50 text-sky-600 hover:bg-sky-100"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                                lineNumber: 100,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "小红书主页"
                            }, void 0, false, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                        lineNumber: 89,
                        columnNumber: 13
                    }, this),
                    item.links.github && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: item.links.github,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center gap-1 text-slate-500 hover:text-slate-800 transition-colors text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "代码"
                            }, void 0, false, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                        lineNumber: 105,
                        columnNumber: 13
                    }, this),
                    item.links.demo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: item.links.demo,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-lg transition-colors bg-sky-50 text-sky-600 hover:bg-sky-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                                lineNumber: 122,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: item.demoLabel || "演示"
                            }, void 0, false, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                                lineNumber: 123,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                        lineNumber: 116,
                        columnNumber: 13
                    }, this),
                    item.links.pdf && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: item.links.pdf,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-lg transition-colors", item.category === "data" ? "bg-sky-50 text-sky-600 hover:bg-sky-100" : "bg-pink-50 text-pink-600 hover:bg-pink-100"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                                lineNumber: 138,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: item.pdfLabel || "下载附件"
                            }, void 0, false, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                                lineNumber: 139,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                        lineNumber: 127,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function Portfolio() {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("data");
    const dataItems = __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["portfolioItems"].filter((item)=>item.category === "data");
    const gameItems = __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["portfolioItems"].filter((item)=>item.category === "game");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "portfolio",
        className: "py-20 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionTitle"], {
                    title: "作品集",
                    subtitle: "数据分析项目与游戏内容洞察"
                }, void 0, false, {
                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex bg-slate-100 rounded-lg p-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab("data"),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2", activeTab === "data" ? "bg-white text-sky-600 shadow-sm" : "text-slate-600 hover:text-slate-800"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this),
                                    "数据与研究",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-400 ml-1",
                                        children: "Data"
                                    }, void 0, false, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab("game"),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2", activeTab === "game" ? "bg-white text-pink-600 shadow-sm" : "text-slate-600 hover:text-slate-800"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this),
                                    "游戏与内容",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-400 ml-1",
                                        children: "Game"
                                    }, void 0, false, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: [
                        activeTab === "data" && dataItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PortfolioCard, {
                                item: item
                            }, item.id, false, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                                lineNumber: 197,
                                columnNumber: 37
                            }, this)),
                        activeTab === "game" && gameItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PortfolioCard, {
                                item: item
                            }, item.id, false, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                                lineNumber: 199,
                                columnNumber: 37
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
            lineNumber: 156,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Portfolio.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
}),
"[project]/CodeBuddy/20260412150338/resume-website/src/data/aiTools.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * AI工具应用能力数据
 * 
 * 修改此文件即可更新AI能力展示
 */ __turbopack_context__.s([
    "aiTools",
    ()=>aiTools
]);
const aiTools = [
    {
        name: "CodeBuddy",
        icon: "Bot",
        description: "AI编程助手，用于前后端开发、代码生成、功能迭代",
        useCases: [
            "老年人风险评估与养老保险定制化推荐网站",
            "前后端模块搭建",
            "代码生成与优化",
            "功能迭代与调试"
        ]
    },
    {
        name: "ChatGPT / DeepSeek / 豆包",
        icon: "MessageSquare",
        description: "通用AI助手，用于资料检索、信息整合、文本优化",
        useCases: [
            "学术资料检索与整理",
            "论文与报告撰写辅助",
            "PPT内容优化",
            "视觉内容创作辅助"
        ]
    },
    {
        name: "GitHub Copilot",
        icon: "Code2",
        description: "代码补全与辅助编程工具",
        useCases: [
            "代码片段生成",
            "Bug排查与调试",
            "缺陷分析与修改追踪",
            "代码重构建议"
        ]
    }
];
}),
"[project]/CodeBuddy/20260412150338/resume-website/src/components/AICapability.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AICapability",
    ()=>AICapability
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/bot.js [app-ssr] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-ssr] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/src/components/SectionTitle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$aiTools$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/src/data/aiTools.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const iconMap = {
    Bot: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"],
    MessageSquare: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
    Code2: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"]
};
function AICapability() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "ai",
        className: "py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionTitle"], {
                    title: "AI 工具应用能力",
                    subtitle: "善用AI工具提升效率与创造力",
                    light: true
                }, void 0, false, {
                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/AICapability.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$aiTools$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aiTools"].map((tool, index)=>{
                        const Icon = iconMap[tool.icon] || __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5,
                                delay: index * 0.15
                            },
                            className: "bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "w-7 h-7 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/AICapability.tsx",
                                        lineNumber: 40,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/AICapability.tsx",
                                    lineNumber: 39,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold text-white mb-2",
                                    children: tool.name
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/AICapability.tsx",
                                    lineNumber: 44,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400 text-sm mb-6",
                                    children: tool.description
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/AICapability.tsx",
                                    lineNumber: 47,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: tool.useCases.map((useCase, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/AICapability.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-300 text-sm",
                                                    children: useCase
                                                }, void 0, false, {
                                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/AICapability.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/AICapability.tsx",
                                            lineNumber: 52,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/AICapability.tsx",
                                    lineNumber: 50,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, tool.name, true, {
                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/AICapability.tsx",
                            lineNumber: 30,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/AICapability.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    whileInView: {
                        opacity: 1
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        delay: 0.5
                    },
                    className: "mt-12 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 text-sm",
                        children: "将AI工具视为得力助手，而非替代品。关键在于提出好问题、批判性思考与有效整合。"
                    }, void 0, false, {
                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/AICapability.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/AICapability.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/AICapability.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/AICapability.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/CodeBuddy/20260412150338/resume-website/src/components/Contact.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Contact",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/src/components/SectionTitle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/src/data/profile.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$contact$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/CodeBuddy/20260412150338/resume-website/src/data/contact.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const iconMap = {
    Phone: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
    Mail: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
    MessageCircle: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"],
    Xiaohongshu: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"]
};
function Contact() {
    const contactItems = [
        {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$contact$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contact"].phone,
            type: "phone"
        },
        {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$contact$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contact"].email,
            type: "email"
        },
        {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$contact$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contact"].wechat,
            type: "wechat"
        },
        {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$contact$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contact"].xiaohongshu,
            type: "xiaohongshu"
        }
    ].filter((item)=>item.show);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "py-20 bg-slate-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionTitle"], {
                    title: "联系方式",
                    subtitle: "期待与您交流"
                }, void 0, false, {
                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Contact.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            className: "text-center mb-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-600 text-lg leading-relaxed",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$contact$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contactTagline"]
                            }, void 0, false, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Contact.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Contact.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid sm:grid-cols-2 gap-4",
                            children: contactItems.map((item, index)=>{
                                const iconKey = item.icon || "Mail";
                                const Icon = iconMap[iconKey] || __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: item.link || (item.type === "phone" ? `tel:${item.value}` : item.type === "email" ? `mailto:${item.value}` : undefined),
                                    target: item.link?.startsWith("http") ? "_blank" : undefined,
                                    rel: item.link?.startsWith("http") ? "noopener noreferrer" : undefined,
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        delay: index * 0.1
                                    },
                                    className: "flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "w-5 h-5 text-blue-600"
                                            }, void 0, false, {
                                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Contact.tsx",
                                                lineNumber: 65,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Contact.tsx",
                                            lineNumber: 64,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-slate-500 capitalize",
                                                    children: item.label || item.type
                                                }, void 0, false, {
                                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Contact.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-800 font-medium truncate",
                                                    children: item.value
                                                }, void 0, false, {
                                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Contact.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Contact.tsx",
                                            lineNumber: 67,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                            size: 16,
                                            className: "text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Contact.tsx",
                                            lineNumber: 71,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.type, true, {
                                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Contact.tsx",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Contact.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                delay: 0.5
                            },
                            className: "mt-12 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Contact.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this),
                                    "目前可联系，最早可实习时间：",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$CodeBuddy$2f$20260412150338$2f$resume$2d$website$2f$src$2f$data$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profile"].earliestStartDate
                                ]
                            }, void 0, true, {
                                fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Contact.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Contact.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Contact.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Contact.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/CodeBuddy/20260412150338/resume-website/src/components/Contact.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=CodeBuddy_20260412150338_resume-website_src_0vfgf~~._.js.map