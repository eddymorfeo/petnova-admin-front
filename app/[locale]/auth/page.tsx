import { LanguageSwitcher } from "@/layout/language/LanguageSwitcher";
import { LoginForm } from "@/pages/auth/login-form";


export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LanguageSwitcher />
        <LoginForm />
      </div>
    </div>
  )
}
