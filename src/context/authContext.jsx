/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useWallet } from "@solana/wallet-adapter-react";

// Create a context for the authentication state
export const AuthContext = createContext();

// AuthProvider component to wrap your application with
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { connected, publicKey } = useWallet();

  // check user
  useEffect(() => {
    const getuser = async () => {
      if (connected && publicKey) {
        console.log("Wallet connected:", publicKey.toBase58());

        const { data, error } = await supabase
          .from("users")
          .select("*")
          .eq("wallet_address", publicKey.toBase58());
        if (!error && data && data.length > 0) {
          console.log("user data");
          console.log(data[0]);

          setUser(data[0]);
        } else {
          // create user
          const { data, error } = await supabase
            .from("users")
            .insert({
              wallet_address: publicKey.toBase58(),
            })
            .select()
            .single();

          if (!error) {
            console.log("new user data");
            console.log(data);
            setUser(data);
          }
        }
      } else {
        setUser(null);
      }
      setIsLoading(false);
    };

    getuser();
  }, [connected, publicKey]);

  // Value object to provide to the context
  const value = {
    user,
    setUser,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
