window.panel.plugin("josehoudini/kirby-writer-textalign", {
    writerMarks: {
        "align-left": {
            get button() {
                return {
                    icon: "text-left",
                    label: window.panel.$t("Align Left"),
                };
            },

            commands({ type, utils }) {
                return () => (state, dispatch) => {
                    // Remove other alignment marks
                    const tr = state.tr;
                    const { from, to } = state.selection;

                    // Remove align-center and align-right
                    tr.removeMark(from, to, state.schema.marks["align-center"]);
                    tr.removeMark(from, to, state.schema.marks["align-right"]);

                    // Toggle mark
                    const markType = type;
                    const isActive = utils.markIsActive(state, markType);

                    if (isActive) {
                        tr.removeMark(from, to, markType);
                    } else {
                        tr.addMark(from, to, markType.create());
                    }

                    if (dispatch) dispatch(tr);
                    return true;
                };
            },

            get name() {
                return "align-left";
            },

            get schema() {
                return {
                    excludes: "align-center align-right",
                    parseDOM: [{ tag: "span.align-left" }],
                    toDOM: () => ["span", { class: "align-left" }, 0],
                };
            },
        },

        "align-center": {
            get button() {
                return {
                    icon: "text-center",
                    label: window.panel.$t("Align Center"),
                };
            },

            commands({ type, utils }) {
                return () => (state, dispatch) => {
                    // Remove other alignment marks
                    const tr = state.tr;
                    const { from, to } = state.selection;

                    // Remove align-left and align-right
                    tr.removeMark(from, to, state.schema.marks["align-left"]);
                    tr.removeMark(from, to, state.schema.marks["align-right"]);

                    // Toggle this mark
                    const markType = type;
                    const isActive = utils.markIsActive(state, markType);

                    if (isActive) {
                        tr.removeMark(from, to, markType);
                    } else {
                        tr.addMark(from, to, markType.create());
                    }

                    if (dispatch) dispatch(tr);
                    return true;
                };
            },

            get name() {
                return "align-center";
            },

            get schema() {
                return {
                    excludes: "align-left align-right",
                    parseDOM: [{ tag: "span.align-center" }],
                    toDOM: () => ["span", { class: "align-center" }, 0],
                };
            },
        },

        "align-right": {
            get button() {
                return {
                    icon: "text-right",
                    label: window.panel.$t("Align Right"),
                };
            },

            commands({ type, utils }) {
                return () => (state, dispatch) => {
                    // Remove other alignment marks
                    const tr = state.tr;
                    const { from, to } = state.selection;

                    // Remove align-left and align-center
                    tr.removeMark(from, to, state.schema.marks["align-left"]);
                    tr.removeMark(from, to, state.schema.marks["align-center"]);

                    // Toggle this mark
                    const markType = type;
                    const isActive = utils.markIsActive(state, markType);

                    if (isActive) {
                        tr.removeMark(from, to, markType);
                    } else {
                        tr.addMark(from, to, markType.create());
                    }

                    if (dispatch) dispatch(tr);
                    return true;
                };
            },

            get name() {
                return "align-right";
            },

            get schema() {
                return {
                    excludes: "align-left align-center",
                    parseDOM: [{ tag: "span.align-right" }],
                    toDOM: () => ["span", { class: "align-right" }, 0],
                };
            },
        }
    },
});
