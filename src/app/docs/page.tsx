"use client";

export default function Docs() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="max-w-3xl w-full ml-80 xl:ml-[20rem] flex flex-col gap-8">
        <h1 className="text-4xl font-bold mb-2">Getting Started</h1>
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p>
          <b>Vite</b> (French word for "quick", pronounced /vit/, like "veet")
          is a build tool that aims to provide a faster and leaner development
          experience for modern web projects. It consists of two major parts:
        </p>
        <ul className="list-disc pl-6">
          <li>
            A dev server that provides rich feature enhancements over native ES
            modules, for example extremely fast Hot Module Replacement (HMR).
          </li>
          <li>
            A build command that bundles your code with Rollup, pre-configured
            to output highly optimized static assets for production.
          </li>
        </ul>
        <p>
          Vite is opinionated and comes with sensible defaults out of the box.
          Read about what's possible in the Features Guide. Support for
          frameworks or integration with other tools is possible through
          Plugins. The Config Section explains how to adapt Vite to your project
          if needed.
        </p>
        <p>
          Vite is also highly extensible via its Plugin API and JavaScript API
          with full typing support.
        </p>
        <p>
          You can learn more about the rationale behind the project in the Why
          Vite section.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Browser Support</h2>
        <p>
          During development, Vite assumes that a modern browser is used. This
          means the browser supports most of the latest JavaScript and CSS
          features. For that reason, Vite sets <code>esnext</code> as the
          transform target. This prevents syntax lowering, letting Vite serve
          modules as close as possible to the original source code. Vite injects
          some runtime code to make the development server work. These code use
          features included in Baseline Newly Available at the time of each
          major release (2025-05-01 for this major).
        </p>
        <p>
          For production builds, Vite by default targets Baseline Widely
          Available browsers. These are browsers that were released at least 2.5
          years ago. The target can be lowered via configuration. Additionally,
          legacy browsers can be supported via the official{" "}
          <code>@vitejs/plugin-legacy</code>. See the Building for Production
          section for more details.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Trying Vite Online</h2>
        <p>
          You can try Vite online on StackBlitz. It runs the Vite-based build
          setup directly in the browser, so it is almost identical to the local
          setup but doesn't require installing anything on your machine. You can
          navigate to <code>vite.new/&#123;template&#125;</code> to select which
          framework to use.
        </p>
        <div>
          <div className="font-mono bg-muted rounded p-4 text-sm overflow-x-auto mb-2">
            JavaScript&nbsp;&nbsp;&nbsp;&nbsp;TypeScript
            <br />
            vanilla&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vanilla-ts
            <br />
            vue&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vue-ts
            <br />
            react&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;react-ts
            <br />
            preact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;preact-ts
            <br />
            lit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lit-ts
            <br />
            svelte&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;svelte-ts
            <br />
            solid&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;solid-ts
            <br />
            qwik&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;qwik-ts
          </div>
        </div>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Scaffolding Your First Vite Project
        </h2>
        <div>
          <div className="font-mono bg-muted rounded p-4 text-sm overflow-x-auto mb-2">
            npm
            <br />
            Yarn
            <br />
            pnpm
            <br />
            Bun
            <br />
            Deno
            <br />
            <br />$ npm create vite@latest
          </div>
        </div>
        <p>Then follow the prompts!</p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Compatibility Note</h3>
        <p>
          Vite requires Node.js version 20.19+, 22.12+. However, some templates
          require a higher Node.js version to work, please upgrade if your
          package manager warns about it.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Community Templates
        </h2>
        <p>
          <code>create-vite</code> is a tool to quickly start a project from a
          basic template for popular frameworks. Check out Awesome Vite for
          community maintained templates that include other tools or target
          different frameworks.
        </p>
        <p>
          For a template at <code>https://github.com/user/project</code>, you
          can try it out online using{" "}
          <code>https://github.stackblitz.com/user/project</code> (adding{" "}
          <b>.stackblitz</b> after github to the URL of the project).
        </p>
        <p>
          You can also use a tool like <code>degit</code> to scaffold your
          project with one of the templates. Assuming the project is on GitHub
          and uses main as the default branch, you can create a local copy
          using:
        </p>
        <div className="font-mono bg-muted rounded p-4 text-sm overflow-x-auto mb-2">
          npx degit user/project#main my-project
          <br />
          cd my-project
          <br />
          <br />
          npm install
          <br />
          npm run dev
        </div>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Manual Installation
        </h2>
        <p>In your project, you can install the vite CLI using:</p>
        <div className="font-mono bg-muted rounded p-4 text-sm overflow-x-auto mb-2">
          npm
          <br />
          Yarn
          <br />
          pnpm
          <br />
          Bun
          <br />
          Deno
          <br />
          <br />$ npm install -D vite
        </div>
        <p>
          And create an <code>index.html</code> file like this:
        </p>
        <div className="font-mono bg-muted rounded p-4 text-sm overflow-x-auto mb-2">
          &lt;p&gt;Hello Vite!&lt;/p&gt;
        </div>
        <p>Then run the appropriate CLI command in your terminal:</p>
        <div className="font-mono bg-muted rounded p-4 text-sm overflow-x-auto mb-2">
          npm
          <br />
          Yarn
          <br />
          pnpm
          <br />
          Bun
          <br />
          Deno
          <br />
          <br />$ npx vite
        </div>
        <p>
          The <code>index.html</code> will be served on{" "}
          <code>http://localhost:5173</code>.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          index.html and Project Root
        </h2>
        <p>
          One thing you may have noticed is that in a Vite project,{" "}
          <code>index.html</code> is front-and-central instead of being tucked
          away inside public. This is intentional: during development Vite is a
          server, and <code>index.html</code> is the entry point to your
          application.
        </p>
        <p>
          Vite treats <code>index.html</code> as source code and part of the
          module graph. It resolves{" "}
          <code>&lt;script type="module" src="..."&gt;</code> that references
          your JavaScript source code. Even inline{" "}
          <code>&lt;script type="module"&gt;</code> and CSS referenced via{" "}
          <code>&lt;link href&gt;</code> also enjoy Vite-specific features. In
          addition, URLs inside <code>index.html</code> are automatically
          rebased so there's no need for special <code>%PUBLIC_URL%</code>{" "}
          placeholders.
        </p>
        <p>
          Similar to static http servers, Vite has the concept of a "root
          directory" which your files are served from. You will see it
          referenced as <code>&lt;root&gt;</code> throughout the rest of the
          docs. Absolute URLs in your source code will be resolved using the
          project root as base, so you can write code as if you are working with
          a normal static file server (except way more powerful!). Vite is also
          capable of handling dependencies that resolve to out-of-root file
          system locations, which makes it usable even in a monorepo-based
          setup.
        </p>
        <p>
          Vite also supports multi-page apps with multiple .html entry points.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Specifying Alternative Root
        </h2>
        <p>
          Running vite starts the dev server using the current working directory
          as root. You can specify an alternative root with{" "}
          <code>vite serve some/sub/dir</code>. Note that Vite will also resolve
          its config file (i.e. <code>vite.config.js</code>) inside the project
          root, so you'll need to move it if the root is changed.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Command Line Interface
        </h2>
        <p>
          In a project where Vite is installed, you can use the vite binary in
          your npm scripts, or run it directly with <code>npx vite</code>. Here
          are the default npm scripts in a scaffolded Vite project:
        </p>
        <div className="font-mono bg-muted rounded p-4 text-sm overflow-x-auto mb-2">
          {`package.json

{
  "scripts": {
    "dev": "vite", // start dev server, aliases: \`vite dev\`, \`vite serve\`
    "build": "vite build", // build for production
    "preview": "vite preview" // locally preview production build
  }
}`}
        </div>
        <p>
          You can specify additional CLI options like <code>--port</code> or{" "}
          <code>--open</code>. For a full list of CLI options, run{" "}
          <code>npx vite --help</code> in your project.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Using Unreleased Commits
        </h2>
        <p>
          If you can't wait for a new release to test the latest features, you
          can install a specific commit of Vite with{" "}
          <code>https://pkg.pr.new</code>:
        </p>
        <div className="font-mono bg-muted rounded p-4 text-sm overflow-x-auto mb-2">
          npm
          <br />
          Yarn
          <br />
          pnpm
          <br />
          Bun
          <br />
          <br />$ npm install -D https://pkg.pr.new/vite@SHA
        </div>
        <p>
          Replace SHA with any of Vite's commit SHAs. Note that only commits
          within the last month will work, as older commit releases are purged.
        </p>
        <p>
          Alternatively, you can also clone the vite repo to your local machine
          and then build and link it yourself (pnpm is required):
        </p>
        <div className="font-mono bg-muted rounded p-4 text-sm overflow-x-auto mb-2">
          git clone https://github.com/vitejs/vite.git
          <br />
          cd vite
          <br />
          pnpm install
          <br />
          cd packages/vite
          <br />
          pnpm run build
          <br />
          pnpm link --global # use your preferred package manager for this step
          <br />
          <br />
          # Then go to your Vite based project and run
          <br />
          pnpm link --global vite
          <br />
        </div>
        <p>Now restart the development server to ride on the bleeding edge!</p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Dependencies using Vite
        </h2>
        <p>
          To replace the Vite version used by dependencies transitively, you
          should use npm overrides or pnpm overrides.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Community</h2>
        <p>
          If you have questions or need help, reach out to the community at
          Discord and GitHub Discussions.
        </p>
      </div>
    </div>
  );
}
