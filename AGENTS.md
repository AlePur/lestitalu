Write modular, professional, maintainable code. Consider separation of concerns.
When implementing changes, don't make them backwards-compatible. Clean breaking changes.
 - Openflake and opencode are the local code writing agents. The user will never refer to them or mean these, so you don't need to read them or understand them, because they are outside of the shippable product.
 - Ask when you are faced with a complex architectural decision. Do not make a silent decision
 - Do not rewrite code just because you don't understand it. If there's code you don't understand, keep it, unless the user asked to change it
 - Don't add excessive comments containing complicated ascii characters in the codebase
 - Make surgical changes when they are called for
 - Don't plan extra bullshit if the user didn't ask for it
 - Don't add backwards compatibility shims. Only do it if it's completely free, and then flag it clearly in the plan. 
 - No new .md files unless authorized by user.
 - Use shell.nix for dependencies for the project
 - You are never allowed to use any git-manipulation (write) commands like stash or checkout
 - For tsc, use `nix-shell shell.nix --run "node node_modules/typescript/bin/tsc --noEmit"`
