{
    const apply = (variable, value) => {
        document.querySelectorAll('.result').forEach(result => {
            result.style.setProperty(`--${variable}`, value);
        })
    }

    document.querySelectorAll('.result input[type="range"]').forEach(input => {
        input.addEventListener('input', () => {
            apply(input.id, input.value);
            // document.body.style.setProperty(`--${input.id}`, input.value);
            input.nextElementSibling.textContent = input.value;
        });
        apply(input.id, input.value);
        // document.body.style.setProperty(`--${input.id}`, input.value);
    });

    // const lightness = element => parseInt(getComputedStyle(element).background.match(/oklch\(([\d\.]+) ([\d\.]+) (\d+)/)[3]);
    //
    // document.querySelector('.random-palette select').addEventListener('change', evt => {
    //     const parent = evt.target.parentElement;
    //     parent.style.setProperty(`--space`, evt.target.value);
    //     [...(parent.querySelectorAll('span'))].sort((a, b) => {
    //         return lightness(b) - lightness(a)
    //     }).forEach(el=>{
    //         parent.appendChild(el)
    //     })
    // });
}
