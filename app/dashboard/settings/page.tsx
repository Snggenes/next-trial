import { auth } from "@/auth"


export default async function SeetingsPage(){

    const session = await auth();

    return <div>{JSON.stringify(session)}</div>
}