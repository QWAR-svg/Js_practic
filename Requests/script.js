const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    hello();
})

async function hello() {
  const x = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const answer = await x.json();
  console.log(answer);
}