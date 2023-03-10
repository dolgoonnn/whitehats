import React from 'react';

function FeaturesBlocks() {
  return (
    <section id='whatWeDo' className="relative" >

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Бид юу хийдэг вэ?</h2>
            <p className="text-xl text-gray-600">Технологийн салбарт кареераа эхлүүлэхэд туслахад бүх төрлийн үйл ажиллагаа явуулдаг. Хатуу ур чадвараас зөөлөн ур чадвар гээд л бүр эрүүл мэнддээ ч анхаардаг</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <div className="bg-blue-600 rounded-full w-16 h-16 p-1 -mt-1 mb-2 ">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="p-2 stroke-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Coding</h4>
              <p className="text-gray-600 text-center">Маш энгийнээр код бичиж том прожектуудыг дууриалган хийх болно</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <div className="bg-blue-600 rounded-full w-16 h-16 p-1 -mt-1 mb-2 ">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="p-2 stroke-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>

            </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Кареер хөгжил</h4>
              <p className="text-gray-600 text-center">Ажилд орохд хэрэгтэй хэдхээн зүйлс байдгийг гаргуун сурах болно</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207" />
                    <path className="stroke-current text-white" d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Innovation</h4>
              <p className="text-gray-600 text-center">Старт-ап клубтэй хамтран инновацийн эрдэмд шамдана🤝.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g transform="translate(22.857 19.429)" strokeWidth="2">
                    <path className="stroke-current text-white" strokeLinecap="square" d="M12.571 4.571V0H0v25.143h12.571V20.57" />
                    <path className="stroke-current text-white" d="M16 12.571h8" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M19.429 8L24 12.571l-4.571 4.572" />
                    <circle className="stroke-current text-blue-300" strokeLinecap="square" cx="12.571" cy="12.571" r="3.429" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Тэмцээн</h4>
              <p className="text-gray-600 text-center">Яагаад дандаа csgo, dota гэсэн тэмцээн байх ёстой юм манайхны залхуурахдаа тоглодог тоглоомоор тэмцээн зохионо🔥 </p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Мэдлэг солилцох</h4>
              <p className="text-gray-600 text-center">Бид одоогоор дан Мэдээллийн системийн оюутнууд байгаа. Өөр тэнхимийн хүүхдүүдтэй мэдлэг солилцох өдөрлөг хийнэ</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-white" d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714" />
                    <path className="stroke-current text-white" d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286" />
                    <path className="stroke-current text-white" d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286" />
                    <path className="stroke-current text-blue-300" d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572" strokeLinecap="square" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Cпорт өдөрлөг</h4>
              <p className="text-gray-600 text-center">Дандаа л сууж байна даа тэ🥱. Хааяа ч гэсэн идэвхитэй хөдөлгөөн хийнэ</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
