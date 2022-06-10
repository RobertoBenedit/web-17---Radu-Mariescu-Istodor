class Controls {
    constructor() {
        this.fordward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;

        this.#addKeyBoardListeners();
    }
    #addKeyBoardListeners() {
        document.onkeydown = (e) => {
            switch (e.key) {
                case "arrowLeft":
                    this.left = true;
                    break;
                case "arrowRight":
                    this.right = true;
                    break;
                case "arrowUp":
                    this.fordward = true;
                    break;
                case "arrowDown":
                    this.reverse = true;
                    break;
            }
            console.table(this);
        };
        document.onkeyup = (e) => {
            switch (e.key) {
                case "arrowLeft":
                    this.left = false;
                    break;
                case "arrowRight":
                    this.right = false;
                    break;
                case "arrowUp":
                    this.fordward = false;
                    break;
                case "arrowDown":
                    this.reverse = false;
                    break;
            }
            console.table(this);
        };
    }
}
