const onChange = (param) => {
    document.getElementById('p1').innerHTML = param.target.value;
}
//1. Read from the input
//2. Write into the paragraph

document.getElementById('inp1').addEventListener('keydown',onChange);