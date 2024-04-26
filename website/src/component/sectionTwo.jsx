import people from "../assets/people.png"

const SectionTwo = () => {
    return (
        <div>
            <ul>
                <li className="flex flex-col md:flex-row items-center p-10">
                    <img class="h-auto max-w-50 md:max-w-[40rem] rounded-full" src={people} alt="image description" />
                    <div className="pl-10">
                        <h2 class="text-4xl font-extrabold dark:text-white">Understanding the Challenge</h2>
                        <p class="my-4 text-lg text-gray-500 w-[30rem]">In New York City, the dream of affordable living seems increasingly out of reach as rent prices continue to climb, displacing many in the process.</p>
                        <a href="#" class="inline-flex items-center text-lg text-white-600 dark:text-green-900 hover:underline">
                            Read more
                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SectionTwo;