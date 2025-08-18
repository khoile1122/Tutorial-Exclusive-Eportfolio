//template_v1bmava
//service_9dpices
//eTE6ily6sze56hO__

function contact() {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.model__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
       .sendForm(
            'service_9dpices',
            'template_v1bmava',
            event.target,
            'eTE6ily6sze56hO__'
        ).then(() => {
            throw new Error("error");
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch (() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email services is temprarily unavailable. Please contact me directly on email@email.com"
            );
        })
}