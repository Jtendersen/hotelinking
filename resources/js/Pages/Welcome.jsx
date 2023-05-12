import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Offers Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
                <div class="max-w-7xl mx-auto p-6 lg:p-8">
                    <div class="flex justify-center">
                        <a href="https://www.hotelinking.com/" target="_blank">
                            <img
                                src="../../assets/hotelinking.png"
                                alt="hotelinking-logo"
                            />
                        </a>
                    </div>
                    <div class="mt-16">
                        <div class="grid grid-cols-1 gap-6 lg:gap-8">
                            <div class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
                                <div>
                                    <h2 class="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                                        Hotelinking Challenge
                                    </h2>
                                    <p class="m-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                        A small platform where a user can
                                        access, see a list of offers, and by
                                        clicking on any of them, generate a
                                        unique code that will be saved in the
                                        database. Later, the user can review
                                        their promotional codes on a detail
                                        page. On the detail page, the user can
                                        click on a redeem code button that will
                                        mark the code as redeemed in the
                                        database and confirm to the user that it
                                        has been redeemed.
                                        <hr />
                                        <br />
                                        <li>
                                            A user registers or logs into the
                                            application
                                        </li>
                                        <li>
                                            The user sees a list of offers and a
                                            button to generate a promotional
                                            code
                                        </li>
                                        <li>
                                            A user can click on the button to
                                            receive a promotional code; it must
                                            be unique
                                        </li>
                                        <li>
                                            The user can see a list of their
                                            promotional codes on another page
                                            and, by clicking on each one, redeem
                                            them (No need to implement a complex
                                            redemption system, simply mark it as
                                            redeemed)
                                        </li>
                                        <li>
                                            In all cases, there will be
                                            confirmation (feedback) of the
                                            operations performed.
                                        </li>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center mt-16 px-0 sm:items-center sm:justify-between">
                        <div class="ml-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:text-right sm:ml-0">
                            Laravel v10.x + PHP
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
