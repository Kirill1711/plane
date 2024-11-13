let models = document.querySelectorAll('.chose_avia__model_country');

if(models.length > 0) {
    action();

function action () {
    let i = 0;
    let count = 300;
    while(i <= models.length) {
        const model = models[i];
        setTimeout(function() {
            model.classList.add('active_model');
        },count);
        i++;
        count = count + 100;
    }
}
}
