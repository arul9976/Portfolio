import React from 'react'
import BgParticles from '../../utils/BgParticles'
import { loadSlim } from '@tsparticles/slim'
import { Database, Layout, Braces, FileType, Server, Box, FileCode, Code, Layers, Palette, Construction, Container, Share2 } from 'lucide-react';
import Skill from './Skill';
import CodeWars2KyuRank from './RankBadge';
const Myskill = () => {

    const frameworkGroups = [
        {
            category: "Backend",
            items: [
                { name: "NodeJs", icon: <Server size={16} /> },
                { name: "Springboot", icon: <Box size={16} /> },
                { name: "Java Servlet", icon: <FileCode size={16} /> }
            ]
        },
        {
            category: "Frontend",
            items: [
                { name: "React", icon: <Code size={16} /> },
                { name: "Redux", icon: <Layers size={16} /> }
            ]
        },
        {
            category: "Styling",
            items: [
                { name: "Sass", icon: <Palette size={16} /> },
                { name: "TailwindCSS", icon: <Palette size={16} /> },
                { name: "Bootstrap", icon: <Palette size={16} /> }
            ]
        },
        {
            category: "Others",
            items: [
                { name: "Mickey framework", icon: <Construction size={16} /> },
                { name: "Docker", icon: <Container size={16} /> },
                { name: "YJS Framework (CRDT)", icon: <Share2 size={16} /> }
            ]
        }
    ];

    return (
        <>
            <div className='fixed'>{BgParticles(loadSlim)}</div>

            <div className='animate-slide-bottom text-black relative z-20 md:grid-cols-2 gap-4 grid place-items-center overflow-y-auto w-full h-full max-md:pb-10  max-md:pt-36'>
                <div className='w-3/4 h-3/4 min-h-[85%] max-md:flex max-md:justify-end max-md:flex-col'>
                    <div style={{ '--clr': '#32aa82', '--clr-1': '#f87171' }}
                        className="w-full md:h-4/5 h-2/3 bg-conic p-3 rounded-md p-5 max-md:min-h-full"
                    >
                        <div className="absolute inset-0 bg-grid-white/10 bg-grid-8"></div>

                        <div className="relative z-10">
                            <div className="flex items-center space-x-2 mb-4">
                                <FileCode className="w-6 h-6 text-white" />
                                <h2 className="text-2xl font-bold text-white">Software Developement</h2>
                            </div>

                            <p className="text-white/90 text-xl mb-8 max-mini:text-[12px]">
                                I enjoy writing clean code and creating useful products.
                            </p>

                            <div className="space-y-4 overflow-y-auto max-mini:h-[130px]">
                                <h3 className="text-white/80 font-medium flex items-center gap-2">
                                    <Code className="w-4 h-4" />
                                    Language Skills
                                </h3>
                                <div className="flex flex-wrap gap-2 overflow-y-auto h-full">
                                    <Skill icon={<Layout size={14} />} name="HTML/CSS" />
                                    <Skill icon={<FileType size={14} />} name="Java" />
                                    <Skill icon={<Code size={14} />} name="Python" />
                                    <Skill icon={<Braces size={14} />} name="JavaScript" />
                                    <Skill icon={<Database size={14} />} name="MySQL" />
                                    <Skill icon={<Database size={14} />} name="MongoDB" />
                                </div>
                            </div>
                            <div className='my-4 min-h-[200px]'>
                                <h3 className="text-white/80 font-medium flex items-center gap-2">
                                    <Code className="w-4 h-4" />
                                    In CodeWar
                                </h3>

                                <CodeWars2KyuRank />

                            </div>

                        </div>

                        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-md"></div>
                    </div>
                </div>

                <div className='w-3/4 h-3/4 max-md:h-full md:flex md:justify-end md:flex-col'>
                    <div
                        style={{ '--clr': '#d15858', '--clr-1': '#32aa82' }}
                        className="w-full md:h-4/5 grid bg-conic p-3 rounded-md p-5 max-md:min-h-[650px] "
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-md"></div>
                        <div className="absolute bottom-10 left-10 w-20 h-20 bg-white/5 rounded-full blur-sm"></div>

                        <div className="flex items-center gap-2 mb-3">
                            <Construction className="w-6 h-6 text-white" />
                            <h2 className="text-2xl font-bold text-white">Frameworks / Libraries</h2>
                        </div>

                        <p className="text-white/90 text-xl">
                            I'm interested in turning ideas into reality.
                        </p>

                        <div className="space-y-2 overflow-auto ">
                            {frameworkGroups.map((group, index) => (
                                <div key={index} className="mb-3">
                                    <h3 className="text-white/80 font-medium text-start md:mt-10 text-sm mb-2">
                                        {group.category}
                                    </h3>

                                    <div className="flex flex-wrap gap-2">
                                        {group.items.map((item, i) => (
                                            <div
                                                key={i}
                                                className="flex min-h-[50px] h-full items-center gap-1 px-3 py-1 h-full bg-white/10 hover:bg-white/20 rounded-lg transition-all hover:translate-y-px"
                                            >
                                                <span className="text-white/80">{item.icon}</span>
                                                <span className="text-white text-md">{item.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>




            </div>

            <div className="fixed bottom-5 left-[10%] text-white">
                <b className='text-8xl opacity-[.3]'>Skills</b>
            </div>

        </>
    )
}

export default Myskill