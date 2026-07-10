// Authored lesson content for the Git course. All prose is original and written
// for this project. Keyed by `${course}/${lessonSlug}` and merged into
// LESSON_CONTENT in lesson-content.ts.
import type { LessonContent } from "@/lib/lesson-content";

export const GIT_CONTENT: Record<string, LessonContent> = {
  "git/git-what-is-git": {
    blocks: [
      { t: "h2", text: "A distributed history machine" },
      { t: "p", text: "Git is a distributed version control system: every clone contains the full project history, not just the latest snapshot. This means you can commit, branch, and inspect history entirely offline, and there is no single point of failure. Git tracks content by taking snapshots of your files, not diffs, and identifies every snapshot by a hash of its contents." },
      { t: "ul", items: ["A **commit** is an immutable snapshot plus metadata (author, message, parents).", "A **branch** is just a movable pointer to a commit.", "**HEAD** is a pointer to the branch (or commit) you are currently on."] },
      { t: "callout", variant: "note", text: "Because commits are content-addressed by SHA hash, identical content always produces the same object. Git deduplicates automatically." },
    ],
  },
  "git/git-init-clone": {
    blocks: [
      { t: "h2", text: "Starting a repository" },
      { t: "p", text: "There are two ways to get a repository: create one from scratch with `git init`, or copy an existing one with `git clone`. `init` creates a hidden `.git` directory that holds all history and configuration. `clone` downloads that entire history from a remote and sets up an `origin` remote pointing back to it." },
      { t: "code", lang: "bash", code: "git init my-project          # new empty repo\ngit clone <url>              # copy an existing repo\ngit clone <url> my-dir       # into a named directory" },
      { t: "callout", variant: "tip", text: "Everything Git knows lives in `.git`. Delete that folder and you have a plain directory again; back it up and you have preserved all history." },
    ],
  },
  "git/git-staging-commits": {
    blocks: [
      { t: "h2", text: "The staging area" },
      { t: "p", text: "Git has three states for a file: modified in your working directory, staged in the index, and committed in history. `git add` moves changes into the staging area, letting you compose a commit precisely — you can stage some changes and leave others out. `git commit` then records exactly what is staged." },
      { t: "code", lang: "bash", code: "git status              # see what changed\ngit add file.txt        # stage a specific file\ngit add -p              # stage selected hunks interactively\ngit commit -m \"message\" # record staged changes" },
      { t: "callout", variant: "tip", text: "Use `git add -p` to review and stage changes hunk by hunk. It produces clean, focused commits and catches stray debug lines before they land." },
    ],
  },
  "git/git-history": {
    blocks: [
      { t: "h2", text: "Reading the past" },
      { t: "p", text: "`git log` walks the commit graph backward from HEAD. Its many flags let you shape the output — condense it, graph it, or filter it by author, path, or content. Learning to navigate history quickly is one of the highest-leverage Git skills." },
      { t: "code", lang: "bash", code: "git log --oneline --graph --all   # compact visual history\ngit log -p file.txt               # show changes to a file\ngit log --since=\"2 weeks ago\"     # filter by time\ngit show <commit>                 # inspect one commit" },
      { t: "callout", variant: "note", text: "`git blame <file>` annotates each line with the commit that last changed it — invaluable for understanding why code exists." },
    ],
  },
  "git/git-ignore": {
    blocks: [
      { t: "h2", text: "Keeping junk out of history" },
      { t: "p", text: "A `.gitignore` file lists patterns for files Git should not track — build artifacts, dependencies, secrets, and editor files. Ignoring them keeps the repository clean and prevents accidentally committing large or sensitive files. Note that `.gitignore` only affects untracked files; already-tracked files must be removed from the index first." },
      { t: "code", lang: "bash", code: "# .gitignore\nnode_modules/\n*.log\n.env\ndist/\n\n# stop tracking a file already committed\ngit rm --cached secret.env" },
      { t: "callout", variant: "warn", text: "A secret committed even once lives in history forever. `.gitignore` prevents future mistakes but cannot scrub a leaked credential — rotate it and rewrite history." },
    ],
  },
  "git/git-branches": {
    blocks: [
      { t: "h2", text: "Cheap, disposable pointers" },
      { t: "p", text: "A branch in Git is nothing more than a lightweight, movable pointer to a commit. Creating one is instant and costs no storage, which is why branching for every feature or experiment is the norm. Switching branches updates your working directory to match that branch's snapshot." },
      { t: "code", lang: "bash", code: "git branch feature-x        # create a branch\ngit switch feature-x        # move onto it\ngit switch -c feature-y     # create and switch in one step\ngit branch -d feature-x     # delete a merged branch" },
      { t: "callout", variant: "tip", text: "`git switch` and `git restore` are the modern, clearer replacements for the overloaded `git checkout`. Prefer them." },
    ],
  },
  "git/git-merging": {
    blocks: [
      { t: "h2", text: "Bringing branches together" },
      { t: "p", text: "Merging integrates the changes from one branch into another. When the target branch has not diverged, Git performs a fast-forward — simply moving the pointer forward. When both branches have new commits, Git creates a merge commit with two parents, preserving the full history of both lines of work." },
      { t: "code", lang: "bash", code: "git switch main\ngit merge feature-x           # merge feature into main\ngit merge --no-ff feature-x   # force a merge commit" },
      { t: "callout", variant: "note", text: "`--no-ff` keeps an explicit merge commit even when a fast-forward is possible, making the feature's boundary visible in history." },
    ],
  },
  "git/git-merge-conflicts": {
    blocks: [
      { t: "h2", text: "When two changes collide" },
      { t: "p", text: "A conflict happens when both branches change the same lines and Git cannot decide which to keep. It marks the conflicting regions in the file and pauses the merge. Your job is to edit the file into the intended final state, remove the markers, stage it, and complete the merge." },
      { t: "code", lang: "text", code: "<<<<<<< HEAD\nyour version\n=======\ntheir version\n>>>>>>> feature-x" },
      { t: "ol", items: ["Open each conflicted file and resolve the marked regions.", "Remove all `<<<<`, `====`, `>>>>` markers.", "`git add` the resolved files.", "`git commit` (or `git merge --continue`) to finish."] },
      { t: "callout", variant: "tip", text: "`git merge --abort` throws away the attempt and returns you to a clean state if a merge gets too messy to resolve safely." },
    ],
  },
  "git/git-rebase": {
    blocks: [
      { t: "h2", text: "Replaying commits for a linear history" },
      { t: "p", text: "Rebasing moves a branch's commits so they start from a different base, replaying them one by one on top of the target. The result is a linear history without merge commits — cleaner to read, but it rewrites commit hashes. Use it to keep a feature branch current with main before merging." },
      { t: "code", lang: "bash", code: "git switch feature-x\ngit rebase main            # replay feature commits on top of main" },
      { t: "callout", variant: "warn", text: "Never rebase commits that others have already pulled. Rewriting shared history forces everyone else into painful conflicts. Rebase only your own local, unpushed work." },
    ],
  },
  "git/git-cherry-pick": {
    blocks: [
      { t: "h2", text: "Grabbing one commit" },
      { t: "p", text: "`git cherry-pick` applies the changes from a specific commit onto your current branch, creating a new commit with the same content. It is the tool for backporting a bug fix to a release branch or pulling a single useful change out of a larger branch." },
      { t: "code", lang: "bash", code: "git switch release-1.x\ngit cherry-pick <commit-hash>      # apply one commit here\ngit cherry-pick <hash1> <hash2>    # apply several" },
      { t: "callout", variant: "note", text: "Cherry-picking duplicates the change rather than sharing it. If you later merge the source branch, Git usually reconciles the duplicate cleanly, but be aware you now have two commits with the same effect." },
    ],
  },
  "git/git-remotes-basics": {
    blocks: [
      { t: "h2", text: "Repositories elsewhere" },
      { t: "p", text: "A remote is a named reference to another copy of the repository, usually on a server like GitHub. `origin` is the conventional name for the one you cloned from. Remotes let multiple people share commits, and you can have several — for example, `origin` for your fork and `upstream` for the original project." },
      { t: "code", lang: "bash", code: "git remote -v                       # list remotes\ngit remote add upstream <url>       # add another remote\ngit remote show origin              # details about a remote" },
      { t: "callout", variant: "note", text: "Remote-tracking branches like `origin/main` are read-only pointers that record where the remote's branches were the last time you synced." },
    ],
  },
  "git/git-fetch-pull-push": {
    blocks: [
      { t: "h2", text: "Moving commits over the wire" },
      { t: "p", text: "`fetch` downloads new commits from a remote without touching your working branch — it just updates the remote-tracking refs. `pull` is `fetch` followed by a merge (or rebase) into your current branch. `push` uploads your local commits to the remote." },
      { t: "code", lang: "bash", code: "git fetch origin              # download, don't merge\ngit pull                      # fetch + integrate\ngit pull --rebase             # fetch + rebase instead of merge\ngit push origin main          # upload your commits" },
      { t: "callout", variant: "tip", text: "Prefer `git fetch` then review, over a blind `git pull`. Seeing what changed before integrating avoids surprise merges." },
    ],
  },
  "git/git-pull-requests": {
    blocks: [
      { t: "h2", text: "Proposing changes for review" },
      { t: "p", text: "A pull request (or merge request) is a hosting-platform feature, not a Git command. You push a branch, then open a PR proposing to merge it into a target branch. The PR is where code review, automated checks, and discussion happen before the change is accepted." },
      { t: "ul", items: ["Keep PRs small and focused — they get reviewed faster and better.", "Write a clear description explaining the what and the why.", "Ensure CI passes before requesting review.", "Respond to feedback with follow-up commits, then squash if desired."] },
      { t: "callout", variant: "tip", text: "A good PR description saves reviewers time: link the issue, summarize the approach, and call out anything you are unsure about." },
    ],
  },
  "git/git-forking-workflow": {
    blocks: [
      { t: "h2", text: "Contributing without write access" },
      { t: "p", text: "The forking workflow is standard for open-source contribution. You fork the project to your own account, clone your fork, and add the original as an `upstream` remote. You push branches to your fork and open pull requests against upstream, keeping your fork synced as the project evolves." },
      { t: "code", lang: "bash", code: "git clone <your-fork-url>\ngit remote add upstream <original-url>\ngit fetch upstream\ngit rebase upstream/main       # keep your branch current" },
      { t: "callout", variant: "note", text: "You only have write access to your own fork. Pull requests are how your changes reach the upstream project you cannot push to directly." },
    ],
  },
  "git/git-stash": {
    blocks: [
      { t: "h2", text: "Setting work aside" },
      { t: "p", text: "`git stash` saves your uncommitted changes onto a stack and reverts your working directory to a clean state. It is perfect for when you need to switch branches urgently but are not ready to commit. You can reapply the stash later, on any branch." },
      { t: "code", lang: "bash", code: "git stash                  # save changes, clean the tree\ngit stash list             # see the stack\ngit stash pop              # reapply and drop the top stash\ngit stash apply            # reapply but keep it on the stack" },
      { t: "callout", variant: "warn", text: "Stashes are easy to forget. They are not tied to a branch and do not show in the log — pop or clear them promptly to avoid losing track of work." },
    ],
  },
  "git/git-reset-revert": {
    blocks: [
      { t: "h2", text: "Undoing, two different ways" },
      { t: "p", text: "`git reset` moves the current branch pointer to an earlier commit — rewriting history — with modes controlling what happens to your files. `git revert` instead creates a new commit that undoes a previous one, preserving history. Reset is for local cleanup; revert is safe for shared branches." },
      { t: "table", head: ["Command", "Effect"], rows: [["`reset --soft`", "Move branch; keep changes staged"], ["`reset --mixed`", "Move branch; keep changes unstaged (default)"], ["`reset --hard`", "Move branch; discard changes entirely"], ["`revert <c>`", "New commit undoing <c>; history intact"]] },
      { t: "callout", variant: "warn", text: "`git reset --hard` permanently discards uncommitted work. Double-check before running it, and prefer `revert` on any branch others share." },
    ],
  },
  "git/git-reflog": {
    blocks: [
      { t: "h2", text: "The safety net" },
      { t: "p", text: "The reflog records every place HEAD has pointed — every commit, checkout, reset, and rebase. Even when a commit seems lost after a bad reset or rebase, its hash usually still lives in the reflog, letting you recover it. This is why 'lost' commits in Git are rarely truly gone." },
      { t: "code", lang: "bash", code: "git reflog                       # list recent HEAD positions\ngit reset --hard HEAD@{2}        # jump back to a prior state\ngit branch recovered <hash>      # rescue a lost commit" },
      { t: "callout", variant: "tip", text: "If you ever think you destroyed work with a reset or rebase, check `git reflog` before panicking. The old commit is almost always still recoverable." },
    ],
  },
  "git/git-interactive-rebase": {
    blocks: [
      { t: "h2", text: "Rewriting a series of commits" },
      { t: "p", text: "Interactive rebase (`rebase -i`) lets you edit a range of commits: reorder them, squash several into one, reword messages, or drop them entirely. It is the tool for cleaning up a messy feature branch into a coherent story before opening a pull request." },
      { t: "code", lang: "bash", code: "git rebase -i HEAD~4      # edit the last 4 commits\n# in the editor:\n#   pick   -> keep as-is\n#   squash -> fold into previous commit\n#   reword -> change the message\n#   drop   -> remove the commit" },
      { t: "callout", variant: "warn", text: "Interactive rebase rewrites hashes. Do it only on local, unpushed commits — or be prepared to force-push a branch nobody else is using." },
    ],
  },
  "git/git-workflows": {
    blocks: [
      { t: "h2", text: "Choosing a branching model" },
      { t: "p", text: "A branching workflow is a team agreement about how branches map to work and releases. There is no single right answer — the best choice depends on your release cadence and team size. The trend in modern teams is toward simpler, trunk-based models with short-lived branches and frequent integration." },
      { t: "table", head: ["Workflow", "Best for"], rows: [["Trunk-based", "Fast-moving teams shipping continuously"], ["GitHub Flow", "Web apps with continuous deployment"], ["Git Flow", "Scheduled releases with long-lived branches"]] },
      { t: "callout", variant: "tip", text: "Keep branches short-lived. The longer a branch diverges from main, the more painful the eventual merge — integrate early and often." },
    ],
  },
};
