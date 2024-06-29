// pages/auth/index.tsx
// pages/auth/index.tsx

import "./auth.css";
import { SignedOut, SignInButton, SignUpButton } from "@clerk/clerk-react";

export const Auth = () => {
    return (
        <div className="auth-container">
            <SignedOut>
                <div className="auth-button-container">
                    <SignUpButton mode="modal" />
                    <SignInButton mode="modal" />
                </div>
            </SignedOut>
        </div>
    );
};
