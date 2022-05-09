
export const Navbar = () => {

    return (
        <nav className="bg-white shadow-md flex justify-between align-middle">
            <h1 className="text-2xl">FanField</h1>
            <input 
            className="p-1 border focus: outline-none rounded-md border-slate-300 border-primary " 
            type="search" id="search" placeholder="Search"/>
        </nav>
    )
}