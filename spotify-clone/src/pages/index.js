
export default function Home() {
  return (
    <>
      <div className='bg-pink-400 px-5 flex justify-between w-full h-1/4'>
        {/* Margin left - ml  */}
        <div className='bg-green-500 p-5'>TESTE</div>
        <div className='bg-green-500 p-5'>TESTE</div>
        <div className='bg-green-500 p-5'>TESTE</div>
      </div>
      <div className='mt-10'>
        <button className='btn-blue'>Botão</button>
        <button className='bg-green-400 mr-3 hover:bg-green-700 text-white py-2 px-4 rounded'>Botão</button>
        <button className='bg-yellow-400 mr-3 hover:bg-yellow-700 text-white py-2 px-4 rounded'>Botão</button>
        <input type='text' placeholder="Clica em mim" className='bg-gray-300 text-gray-900 focus:bg-red-500' /> 
      </div>
    </>
  )
}

// Instalar tailwind
// yarn add tailwindcss@lasted autoprefixer@lasted postcss@lasted
// Criar arquivo de configuração do tailwind
// yarn tailwindcss init
// Build no tailwind 
// yarn tailwindcss-cli@lasted build styles.css -o src/tailwind/tailwind.css

// Não utilizamos break points para mobile pois aqui trabalhamos com mobile first
// Utilizamos breakpoint na frente das classes para referenciar que é outro tipo de tela
// BreakPoints pesquisar mais
// 'sm': '640px',
// // => @media (min-width: 640px) { ... }

// 'md': '768px',
// // => @media (min-width: 768px) { ... }

// 'lg': '1024px',
// // => @media (min-width: 1024px) { ... }

// 'xl': '1280px',
// // => @media (min-width: 1280px) { ... }

// '2xl': '1536px',
// => @media (min-width: 1536px) { ... }