window.panel.plugin("josehoudini/kirby-writer-textalign", {
    writerMarks: ["left", "center", "right"].reduce((marks, align) => {
        const className = `align-${align}`;
        marks[className] = {
            get button() {
                return {
                    icon: `text-${align}`,
                    label: window.panel.$t(
                        `Align ${
                            align.charAt(0).toUpperCase() + align.slice(1)
                        }`
                    ),
                };
            },
            commands() {
                return () => this.toggle();
            },
            get name() {
                return className;
            },
            get schema() {
                return {
                    parseDOM: [{ tag: `span.${className}` }],
                    toDOM: () => ["span", { class: className }, 0],
                };
            },
        };
        return marks;
    }, {}),
});
