"use client";

import { AuthContext } from "@/Providers/AuthProviders";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const PrivateRoute = ({
    children,
    redirectPath = "/sign-in",
    requireAuth = true,
}) => {
    const router = useRouter();
    const { user, loading } = useContext(AuthContext);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                // Check if the user is authenticated or not
                if (requireAuth && !user) {
                    router.push(redirectPath);
                } else if (!requireAuth && user) {
                    router.push("/dashboard"); // Redirect to dashboard if already authenticated
                }
            } catch (error) {
                console.error("Authentication error:", error);
                router.push(redirectPath);
            }
        };

        // Ensure that the user data has been loaded before checking authentication
        if (!loading) {
            checkAuth();
        }
    }, [user, loading]);

    // Render loading indicator if user data is still loading
    if (loading) {
        return <div>Loading...</div>;
    }
    return <>{children}</>;
};

export default PrivateRoute;
