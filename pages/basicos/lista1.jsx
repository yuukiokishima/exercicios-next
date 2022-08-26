/*

    <div>
        <span>1,<span>
        <span>2,<span>
        <span>3,<span>
        <span>4,<span>
        <span>5,<span>
        <span>6,<span>
        <span>7,<span>
        <span>8,<span>
        <span>9,<span>
        <span>10,<span>
    </div>

*/

export default function lista1() {
    return (
        <div>
            {gerarLista()}
        </div>
    );
}

function gerarLista(final = 10) {
    let spans = [];
    let span = '';

    for(let i = 1; i <= final; i++){
        span = <span>{i},</span>;
        spans.push(span);
    }

    return spans
}