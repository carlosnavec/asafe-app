import { Button } from "stories/button/Button";


type User = {
  name: string;
  email?: string;
  image?: string;
};

export interface LogoutProps {
  backgroundColor?: string;
  user: User;
  onLogout?: () => void;
  onGoToDashboard?: () => void;
}

export const Logout = ({
  backgroundColor,
  onLogout,
  onGoToDashboard,
  user,
  ...props
}: LogoutProps) => {
  const customBackgroundColor = backgroundColor ? { backgroundColor } : {};

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
    style={customBackgroundColor}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://webcdn.asafe.com/assets/img/asafe-logo-new.png?v=20240916.2"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            You are signed in as {user?.name}
          </h2>

            <div className="mt-8 flex flex-col items-center justify-center">       
                    <div className="mt-6">
                        
                        <div>

                            <div className="space-y-4 flex flex-col items-center">
                                <p>You can </p>
                            </div>
                            <div className="space-y-4 flex flex-col items-center">
                                
                            <Button label={`Sign out`} 
                                            primary={false} 
                                            onClick={() => onLogout && onLogout()}/>
                            </div>

                            <div className="space-y-4 flex flex-col items-center">
                                <p>-- or -- </p>
                            </div>
                            
                            <div className="space-y-4 flex flex-col items-center">
                                
                                    <Button label={`Go to Dashboard`} 
                                            primary={true} 
                                            onClick={() => onGoToDashboard && onGoToDashboard()}/>

                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
                
                
            </div>
        </div>
      </div>
  );
};

export default Logout;


