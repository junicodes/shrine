import { getObjectAsyncStorage } from '@/utils/asyncStorage';
import { Redirect } from 'expo-router';
import React, { useEffect, useState } from 'react';

const IndexLayout = () => {
    const [loadView, setLoadView] = useState<string | null>(null);

    useEffect(() => {

        (async () => {
            const res = await getObjectAsyncStorage("isOnboarding");
            setLoadView(res?.status ? "signin" : "onboarding")
        })()

        return () => { };

    }, [loadView]);

    return <>
        {loadView === "signin" && <Redirect href="/(tabs)" />}
        {loadView === "onboarding" && <Redirect href="/onboarding" />}
    </>


}

export default IndexLayout;