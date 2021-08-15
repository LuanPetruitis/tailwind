
export default function Home() {
  return (
    <>
      <div className='bg-pink-400 px-5 flex justify-between w-full h-1/4'>
        {/* Margin left - ml  */}
        <div className='bg-green-500 p-5'>TESTE</div>
        <div className='bg-green-500 p-5'>TESTE</div>
        <div className='bg-green-500 p-5'>TESTE</div>
      </div>
      <div className='container mx-auto p-5 mt-4 border-red-900 border-2 bg-red-300'>
        <p>Testando o container</p>
        <p>Testando o container</p>
      </div>
      <div className='mt-10'>
        <button className='btn-blue'>Botão</button>
        <button className='bg-green-400 mr-3 hover:bg-green-700 text-white py-2 px-4 rounded'>Botão</button>
        <button className='bg-yellow-400 mr-3 hover:bg-yellow-700 text-white py-2 px-4 rounded'>Botão</button>
        <input type='text' placeholder="Clica em mim" className='bg-gray-300 text-gray-900 focus:bg-red-500' /> 
      </div>
      <div className='m-auto flex justify-center items-center w-52 h-52 bg-green-700 md:bg-blue-700'>
        <div>
          <p>container</p>
        </div>
      </div>
      <div className='container bg-purple-700 border-2 border-purple-900 border-box m-4 p-10'>
        <p>Border box</p>
      </div>
      <div className='container bg-gray-500 border-2 border-gray-900 box-content m-4 p-10'>
        <p>Border content</p>
      </div>

      <div className='container'>
        <span className='block bg-red-300'>Não são elementos de bloco</span>
        <span className='block bg-red-300'>Não são elementos de bloco</span>
      </div>
      <div className='container bg-red-200 m-6 p-6'>
        <div className='inline-block bg-red-800'>
          caixa 1
        </div>
        <div className='inline-block bg-blue-800'>
          caixa 2
        </div>        
        <div className='inline-block bg-green-600'>
          caixa 3
        </div>
      </div>
      {/* <div className='float-right bg-green-600'>
        Teste float
      </div>
      <div className='float-left bg-red-600'>
        Teste float
      </div> */}

      {/* <div className='container relative'>         
        <div className='bg-yellow-700 h-40 w-40 p-6 absolute z-10'>
          Na frente
        </div>
        <div className='bg-pink-700 h-40 w-40 p-6 absolute z-20 m-4'>
          Atrás
        </div>
        <div className='bg-purple-700 h-40 w-40 p-6 absolute z-30 m-8'>
          Atrás
        </div>
      </div> */}
      
      <div className='flex flex-row bg-red-300'>
        <div className='bg-red-600 p-6 m-2'>1</div>
        <div className='bg-red-600 p-6 m-2'>2</div>
        <div className='bg-red-600 p-6 m-2'>3</div>
      </div>
      <div className='flex flex-col bg-red-300'>
        <div className='bg-red-600 p-6 m-2'>1</div>
        <div className='bg-red-600 p-6 m-2'>2</div>
        <div className='bg-red-600 p-6 m-2'>3</div>
      </div>
      <div className='flex flex-row-reverse bg-green-300'>
        <div className='bg-green-600 p-6 m-2'>1</div>
        <div className='bg-green-600 p-6 m-2'>2</div>
        <div className='bg-green-600 p-6 m-2'>3</div>
      </div>
      <div className='flex flex-col-reverse bg-pink-300'>
        <div className='bg-pink-600 p-6 m-2'>1</div>
        <div className='bg-pink-600 p-6 m-2'>2</div>
        <div className='bg-pink-600 p-6 m-2'>3</div>
      </div>
      <div className='flex flex-wrap bg-red-300'>
        <div className='bg-red-400 p-6 m-3'>1</div>
        <div className='bg-red-500 p-6 m-3'>2</div>
        <div className='bg-red-600 p-6 m-3'>3</div>
        <div className='bg-red-700 p-6 m-3'>4</div>
        <div className='bg-red-800 p-6 m-3'>5</div>
        <div className='bg-red-900 p-6 m-3'>6</div>
      </div>
      <div className='flex flex-wrap bg-red-300'>
        <div className='bg-red-400 order-last p-6 m-3'>1</div>
        <div className='bg-red-500 order-5 p-6 m-3'>2</div>
        <div className='bg-red-600 order-4 p-6 m-3'>3</div>
        <div className='bg-red-700 order-3 p-6 m-3'>4</div>
        <div className='bg-red-800 order-2 p-6 m-3'>5</div>
        <div className='bg-red-900 order-first p-6 m-3'>6</div>
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