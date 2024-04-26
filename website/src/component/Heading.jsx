const Heading = () => {
    return (
        <div className=" p-24 max-w-fit">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white-900 md:text-5xl lg:text-7xl dark:text-green">Find Your Affordable NYC Home At <span class="text-green-600 dark:text-green-500">AffordNYC.</span></h1>
            <p class="text-lg font-normal text-gray-100 lg:text-xl dark:text-gray-50">Empowering New Yorkers with real-time data and personalized housing recommendations that fit your budget. Discover affordable living in all boroughs and get back to what matters most—living your life.</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Start Finding!
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </a>
        </div>
    )
}

export default Heading;