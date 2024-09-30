import Image from "next/image";
import { Button } from "stories/button/Button";

export interface LoginProps {
  backgroundColor?: string;
  providersName?: string[]
  onLogin?: (providerName: string) => void;
}

export const Login = ({
  backgroundColor,
  providersName,
  onLogin,
}: LoginProps) => {
  const customBackgroundColor = backgroundColor ? { backgroundColor } : {};

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
    style={customBackgroundColor}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            alt="asafe"
            src="https://webcdn.asafe.com/assets/img/asafe-logo-new.png?v=20240916.2"
            className="mx-auto h-10 w-auto"
            width={200} 
            height={100}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>

          <div className="mt-8 flex flex-col items-center justify-center">         
            <div className="mt-6">                     
                <div className="space-y-4 flex flex-col items-center">
                    {providersName?.map((name, index) => (
                        <Button key={index} 
                                label={`Sign in with ${name.charAt(0).toUpperCase() + name.slice(1)}`} 
                                primary={true} 
                                onClick={() => onLogin && onLogin(name || '')}/>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;


