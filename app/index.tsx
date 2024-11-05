import useCachedResources from '@/hooks/useCachedResources';
import { getObjectAsyncStorage } from '@/utils/asyncStorage';
import { Redirect } from 'expo-router';
import React, { useEffect, useState } from 'react';

const IndexLayout = () => {
    const isLoadingComplete = useCachedResources();
    const [loadView, setLoadView] = useState<string | null>(null);

    useEffect(() => {

        (async () => {
            const res = await getObjectAsyncStorage("isOnboarding");
            setLoadView(res?.status ? "signin" : "onboarding")
        })()

        return () => { };

    }, [loadView]);


    if (isLoadingComplete) {
        return (
            <>
                {loadView === "signin" && <Redirect href="/(tabs)/profile" />}
                {loadView === "onboarding" && <Redirect href="/onboarding" />}
            </>
        );
    }
}

export default IndexLayout;