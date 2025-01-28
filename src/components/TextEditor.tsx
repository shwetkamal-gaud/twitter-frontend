import ScoreIcon from '@/assets/Svgs/ScoreIcon';
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import UserImage from '../assets/OIP.jpeg'
import UpIcon from '@/assets/Svgs/UpIcon';
import DownIcon from '@/assets/Svgs/DownIcon';
import EmojiIcon from '@/assets/Svgs/EmojiIcon';
import SparklesIcon from '@/assets/Svgs/SparklesIcon';
import CopyIcon from '@/assets/Svgs/CopyIcon';
import ImageIcon from '@/assets/Svgs/ImageIcon';
import LinkIcon from '@/assets/Svgs/LinkIcon';
import MobileIcon from '@/assets/Svgs/MobileIcon';
import TabIcon from '@/assets/Svgs/TabIcon';
import DesktopIcon from '@/assets/Svgs/DesktopIcon';
import { Globe } from 'lucide-react';
import LikeThumbIcon from '@/assets/Svgs/LikeThumbIcon';
import ClapIcon from '@/assets/Svgs/ClapIcon';
import HandHeartIcon from '@/assets/Svgs/HandHeartIcon';
import HeartIcon from '@/assets/Svgs/HeartIcon';
import CommentIcon from '@/assets/Svgs/CommentSVG';
import SentIcon from '@/assets/Svgs/SentIcon';
import ShareIcon from '@/assets/Svgs/ShareIcon';
import ScheduleIcon from '@/assets/Svgs/ScheduleIcon';
import PublishIcon from '@/assets/Svgs/PublishIcon';


const Text: React.FC = () => {
    const [editorContent, setEditorContent] = useState<string>('');
    const [activeLine, setActiveLine] = useState<{
        top: number;
        left: number;
    } | null>(null);
    const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);
    const [tooltipPosition, setTooltipPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
    const [previewMode, setPreviewMode] = useState<'mobile' | 'desktop' | 'tablet'>('mobile')
    const editorRef = useRef<HTMLDivElement | null>(null);

    const handleTextChange = () => {
        if (editorRef.current) {
            setEditorContent(editorRef.current.innerHTML);
        }
    };
    const handleTextSelect = () => {
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0 && selection.toString().trim() !== '') {
            const range = selection.getRangeAt(0);
            const rect = range.getBoundingClientRect();

            setTooltipPosition({
                top: rect.top + window.scrollY - 40,
                left: rect.left + window.scrollX + rect.width / 2,
            });
            setTooltipVisible(true);
        } else {
            setTooltipVisible(false);
        }
    };
    const applyUnderline = () => {
        document.execCommand('underline')
    };
    const handleKeyUp = () => {
        if (editorRef.current) {
            const selection = window.getSelection();
            if (selection && selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                const rect = range.getBoundingClientRect()
                if (rect.top !== 0) {
                    setActiveLine((prev) => ({
                        top: rect.top - window.scrollY - 5, 
                        left: prev ? prev.left : 0,      
                    }));
                } else {
                    setActiveLine(null);
                }
            }
        }
    };

    const insertHeadline = () => {
        if (editorRef.current) {
            const selection = window.getSelection();
            if (selection && selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                const heading = document.createElement("h1");
                heading.textContent = "New";
                heading.style.margin = "0";
                range.insertNode(heading);
                setEditorContent(editorRef.current.innerHTML);
                setActiveLine(null);
            }
        }
    };

    return (
        <div className="row container-fliud px-2 ">
            <div className="col-md-6 d-flex flex-column justify-content-between  border-end px-0" style={{ height: '100vh' }}>
                <div>
                    <div className='border-bottom px-3 py-2 w-100 d-flex justify-content-between align-items-center'>
                        <h5>Write Post</h5>
                        <div className='d-flex justify-between gap-3 align-items-center p-1'>
                            <button className='btn border-secondary text-secondary px-4 gap-2 fw-bold ' style={{ borderRadius: '19px' }}>
                                <ScoreIcon /> Check Score
                            </button>
                            <div className='vr'></div>
                            <Image src={UserImage} alt='user' height={40} width={40} />
                            <div className='d-flex flex-column'>
                                <UpIcon />
                                <DownIcon />
                            </div>
                        </div>
                    </div>
                    <div className='border-bottom px-3 py-2 w-100 d-flex justify-content-between align-items-center'>
                        <div className='d-flex jusitfy-content-between align-items-center gap-4'>
                            <b className='text-secondary fs-3'>B</b>
                            <em className='text-secondary fs-3'>I</em>
                            <del className='text-secondary fs-3'>S</del>
                            <EmojiIcon />
                            <div className='vr'></div>
                            <div className="">
                                <button style={{ backgroundColor: '#d5d2f2', borderRadius: '200px' }} className="btn d-flex align-items-center outline-none " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <SparklesIcon color='#7858F8' />
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" type="button">Complete</button></li>
                                    <li><button className="dropdown-item" type="button">Shorten</button></li>
                                    <li><button className="dropdown-item" type="button">Extend</button></li>
                                    <li><button className="dropdown-item" type="button">Rephrase</button></li>
                                    <li><button className="dropdown-item" type="button">Summarize</button></li>
                                    <li><button className="dropdown-item" type="button">tl:dr</button></li>
                                    <li><button className="dropdown-item" type="button">Simplify</button></li>
                                    <li><button className="dropdown-item" type="button">Spelling & Grammer</button></li>
                                    <hr />
                                    <li><button className="dropdown-item" type="button">Emojify</button></li>
                                    <hr />
                                    <li className='dropend'><button className="dropdown-item  dropdown-toggle" type="button">Tone of Voice</button></li>
                                    <li className='dropend'><button className="dropdown-item dropdown-toggle" type="button">Translate</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className='d-flex jusitfy-content-between align-items-center gap-3'>
                            <CopyIcon />
                            <ImageIcon />
                            <LinkIcon />
                        </div>
                    </div>
                    <div
                        ref={editorRef}
                        className="p-3 mt-1 editor ms-5 outline-none"
                        contentEditable
                        suppressContentEditableWarning={true}
                        onInput={handleTextChange}
                        onMouseUp={handleTextSelect}
                        onKeyUp={handleKeyUp}
                        style={{ minHeight: '200px', position: 'relative' }}
                    >
                    </div>
                    {activeLine !== null && (
                        <div
                            className="left"
                            style={{
                                position: "absolute",
                                top: activeLine.top,
                                left: activeLine.left,
                                zIndex: 1000,
                            }}
                        >
                            <button className='m-auto btn-color btn' onClick={insertHeadline}>
                                +
                            </button>
                        </div>
                    )}
                    {tooltipVisible && (
                        <div
                            className="tooltip-custom"
                            style={{
                                position: 'absolute',
                                top: tooltipPosition.top,
                                left: tooltipPosition.left,
                            }}
                        >
                            <Button className='fw-bold' variant="light" onClick={applyUnderline}>
                                B
                            </Button>
                            <Button variant="light" onClick={applyUnderline}>
                                <em>I</em>
                            </Button>
                            <Button className='text-decoration-underline' variant="light" onClick={applyUnderline}>
                                U
                            </Button>
                            <Button variant="light" onClick={applyUnderline}>
                                <del>T</del>
                            </Button>
                            <Button variant="light" onClick={applyUnderline}>
                                <LinkIcon />
                            </Button>
                            <div className='vr'></div>
                            <Button variant="light" onClick={() => setTooltipVisible(false)}>
                                X
                            </Button>
                        </div>
                    )}
                </div>
                <div className='d-flex  py-3 flex-column '>
                    <div className='d-flex justify-content-between  px-4 '>
                        <span className='text-secondary'>Last Saved at Jan 28, 2025, 12:20 AM</span>
                        <span className='text-secondary'> {editorContent.length}</span>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between   px-4 py-1'>
                        <button className='btn border-secondary' style={{ borderRadius: '18px' }}>Save as Draft</button>
                        <div className='d-flex gap-2'>
                            <button className='btn border-secondary' style={{ borderRadius: '18px' }}>
                                <ScheduleIcon /> Schedule
                            </button>
                            <button className='btn btn-color text-white' style={{ borderRadius: '18px' }}>
                                Publish <PublishIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 p-0 d-flex flex-column gap-3 ">
                <div className='border-bottom px-3  py-3 d-flex justify-content-between '>
                    <h5>Post Preview</h5>
                    <div className='d-flex gap-2'>
                        <button className='btn' style={previewMode === 'mobile' ? { backgroundColor: '#7858F8' } : {}} onClick={() => setPreviewMode('mobile')}>
                            <MobileIcon />
                        </button>
                        <button className='btn' style={previewMode === 'tablet' ? { backgroundColor: '#7858F3' } : {}} onClick={() => setPreviewMode('tablet')}>
                            <TabIcon />
                        </button>
                        <button className='btn' style={previewMode === 'desktop' ? { backgroundColor: '#7858F8' } : {}} onClick={() => setPreviewMode('desktop')}>
                            <DesktopIcon />
                        </button>
                    </div>
                </div>

                <button className='btn border mx-auto'> Copy Text</button>

                <div className='d-flex align-items-center justify-content-center w-100 p-4'>
                    <div className={`card preview-${previewMode}`}>
                        <div className='card-body d-flex flex-column gap-2'>
                            <div className='d-flex gap-2'>
                                <Image src={UserImage} alt='user' height={40} width={40} />
                                <div className='d-flex flex-column'>
                                    <span className='fw-bold'>Cody Fisher</span>
                                    <span style={{ fontSize: '0.8rem' }} className='text-secondary'>UI/UX Design | Web & Mobile Design | Front-end |</span>
                                    <span style={{ fontSize: '0.8rem' }} className='text-secondary'>UI Developer</span>
                                    <span style={{ fontSize: '0.8rem' }} className='text-secondary d-flex align-items-center gap-1'>Now <span className='dot'></span> <Globe height={12} width={12} /></span>
                                </div>
                            </div>
                            <div className="py-1" dangerouslySetInnerHTML={{ __html: editorContent }}></div>

                            <div className='d-flex justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <LikeThumbIcon />
                                    <ClapIcon />
                                    <HandHeartIcon />
                                    <HeartIcon />
                                    <span style={{ fontSize: '0.8rem' }} className='text-secondary ms-1'>88</span>
                                </div>
                                <span style={{ fontSize: '0.8rem' }} className='text-secondary d-flex align-items-center gap-1'>4 Comments <span className='dot'></span> 1 Repost</span>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex gap-1 align-items-center'>
                                    <LikeThumbIcon /><span style={{ fontSize: '0.8rem' }} className='text-secondary'>Like</span>
                                </div>
                                <div className='d-flex gap-1 align-items-center'>
                                    <CommentIcon /><span style={{ fontSize: '0.8rem' }} className='text-secondary'>Comment</span>
                                </div>
                                <div className='d-flex gap-1 align-items-center'>
                                    <ShareIcon /><span style={{ fontSize: '0.8rem' }} className='text-secondary'>Share</span>
                                </div>
                                <div className='d-flex gap-1 align-items-center'>
                                    <SentIcon /><span style={{ fontSize: '0.8rem' }} className='text-secondary'>Send</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Text;
