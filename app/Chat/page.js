"use client"

import React from 'react'
import Chat from '@/components/Chat'
import AudioRecorder from '@/components/AudioRecorder';
import ScreenShare from '@/components/ScreenShare';
import LiveVideo from '@/components/LiveVideo';
import ChatComponent from '@/components/ChatComponent'; // Keep this if you are still using it

export default function Page() {
    return (
        <div>
            <div className='pt-16'>
                <Chat />
            </div>
        </div>
    )
}
