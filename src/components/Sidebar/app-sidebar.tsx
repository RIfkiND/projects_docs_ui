import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { FaCubes } from "react-icons/fa";
// Docs sidebar sections and links
const docsSections = [
  {
    label: "Introduction",
    links: [{ title: "Getting Started", url: "#getting-started" }],
  },
  {
    label: "Guide",
    links: [
      { title: "Features", url: "#features" },
      { title: "Other", url: "#other" },
    ],
  },
];

// Components section for UI web for sell
const componentsSection = {
  label: "Components",
  links: [
    { title: "UI Library", url: "#ui-library" },
    { title: "E-commerce Components", url: "#ecommerce-components" },
    { title: "Landing Page Blocks", url: "#landing-page-blocks" },
    { title: "Pricing Tables", url: "#pricing-tables" },
    { title: "Testimonials", url: "#testimonials" },
    { title: "Contact Forms", url: "#contact-forms" },
    { title: "Hero Sections", url: "#hero-sections" },
    { title: "Feature Grids", url: "#feature-grids" },
    { title: "FAQ Sections", url: "#faq-sections" },
    { title: "Call to Action", url: "#call-to-action" },
  ],
};

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        {/* Sidebar Header */}
        <div className="flex items-center gap-2 px-4 py-6">
          <FaCubes className="text-xl text-blue-500" />
          <h1 className="text-lg font-bold tracking-tight">Docs Sidebar</h1>
        </div>
        {docsSections.map((section, idx) => (
          <React.Fragment key={section.label}>
            <SidebarGroup>
              <SidebarGroupLabel>{section.label}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {section.links.map((link) => (
                    <SidebarMenuItem key={link.title}>
                      <SidebarMenuButton asChild>
                        <a href={link.url}>
                          <span>{link.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            {/* Add divider except after last docs group */}
            {idx < docsSections.length - 1 && (
              <hr className="my-2 border-zinc-200 dark:border-zinc-700" />
            )}
          </React.Fragment>
        ))}
        {/* Divider before Components Section */}
        <hr className="my-2 border-zinc-200 dark:border-zinc-700" />
        <SidebarGroup>
          <SidebarGroupLabel>{componentsSection.label}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {componentsSection.links.map((link) => (
                <SidebarMenuItem key={link.title}>
                  <SidebarMenuButton asChild>
                    <a href={link.url}>
                      <span>{link.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
