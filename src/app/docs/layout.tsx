import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar/app-sidebar";
import DocsHeader from "@/components/Header/DocsHeader";
import OnThisPageAside from "@/components/Docs/OnThisPageAside";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />
        <section className="flex-1 flex flex-col min-h-screen">
          <DocsHeader />
          <main className="flex-1 flex flex-row w-full px-0 py-0">
            <div className="flex-1">{children}</div>
            <div className="hidden md:block w-72 flex-shrink-0 px-5 py-8">
              <OnThisPageAside/>
            </div>
          </main>
        </section>
      </div>
    </SidebarProvider>
  );
}
