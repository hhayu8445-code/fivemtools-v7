import { useSession as useNextAuthSession } from "next-auth/react"

export function useSession() {
  const { data: session, status } = useNextAuthSession()
  
  return {
    session,
    user: session?.user,
    isAuthenticated: !!session,
    isLoading: status === "loading",
  }
}
