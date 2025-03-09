import { Link, Outlet } from "react-router";

export default function Root() {
  return (
    <div className="flex flex-col min-h-screen">
        <div className="navbar bg-base-200">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">Home</Link>
            </div>
        </div>
        <main className="flex-grow container mx-auto p-4">
            <Outlet />
        </main>
    </div>
  )
}