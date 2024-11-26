'use client'
import { Undo2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button, ButtonProps } from "./ui/button";

interface GoBackButtonProps extends ButtonProps {
  children?: React.ReactNode;
  button?: boolean
}

export default function GoBackButton({children, button,...props }: GoBackButtonProps){
 const router = useRouter()
 return (
  <Button {...props} onClick={()=> router.back()}>{button && (<Undo2/>)}{' '}{children}</Button>
 );
};
