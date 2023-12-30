export default function userProfilePage({params}:any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p className="text-4xl">User ID: {params.id}</p>
        </div>
    )
}