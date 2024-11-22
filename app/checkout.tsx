import React from 'react'
import PageHeader from '@/components/shared/PageHeader'
import { ThemedView } from '@/components/ThemedView'

const Checkout = () => {
    return (
        <ThemedView className={`px-2 flex-1`}>
            <PageHeader title='Checkout' goBackUrl={`/details`} />
        </ThemedView>
    )
}

export default Checkout