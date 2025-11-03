// learning js and interactionobserver JUST FOR THIS PROJECT
// im still kind of confused

const interserctionhandler = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } //else {
            //entry.target.classList.remove("visible");
        //}
    });
};

const observer = new IntersectionObserver(interserctionhandler, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
});

const targets = document.querySelectorAll(".scrolling-text");
targets.forEach((target) => observer.observe(target));