import React from "react";

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(loginFormData);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <section className="page-shell flex min-h-[70vh] items-center justify-center py-12">
            <div className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white/75 shadow-2xl shadow-[#143126]/10 ring-1 ring-white/50 backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-[320px] bg-[#143126] p-8 text-white md:p-10">
                    <div className="absolute inset-0 bg-[url('/images/pexels-ahmetyuksek-30794766.jpg')] bg-cover bg-center opacity-25" />
                    <div className="relative z-10 max-w-sm">
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f7d694]">Guest sign in</p>
                        <h1 className="mt-4 text-4xl font-black">Return to your booking dashboard.</h1>
                        <p className="mt-4 leading-7 text-[#e0ebe5]">
                            Manage upcoming adventures, review favorite vans, and keep your road-trip plans in one calm place.
                        </p>
                    </div>
                </div>

                <div className="p-8 md:p-10">
                    <h2 className="text-3xl font-black text-[#143126]">Sign in to your account</h2>
                    <p className="mt-2 text-[#6d7f76]">Use your details to continue planning your next tourist escape.</p>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                    <input
                        name="email"
                        onChange={handleChange}
                        type="email"
                        placeholder="Email address"
                        value={loginFormData.email}
                        className="w-full rounded-2xl border border-[#d6e3db] bg-white px-4 py-3.5 text-[#143126] outline-none transition focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10"
                    />
                    <input
                        name="password"
                        onChange={handleChange}
                        type="password"
                        placeholder="Password"
                        value={loginFormData.password}
                        className="w-full rounded-2xl border border-[#d6e3db] bg-white px-4 py-3.5 text-[#143126] outline-none transition focus:border-[#f59e0b] focus:ring-4 focus:ring-[#f59e0b]/10"
                    />
                        <button className="w-full rounded-2xl bg-[#143126] p-3.5 font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#1b4032]">
                            Continue to dashboard
                        </button>
                    </form>

                    <div className="mt-6 rounded-2xl bg-[#fff8ec] p-4 text-sm text-[#52665c]">
                        Tip: hosts and guests can both access booking activity from the same themed dashboard.
                    </div>
                </div>
            </div>
        </section>
    );
}
