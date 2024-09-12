
'use client';
import React, { useEffect, useState } from 'react';
import Layout from "@/components/layout/Layout";
import CounterUp from "@/components/elements/CounterUp";
import { Dialog, DialogActions, DialogContent, IconButton, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Achievement() {
    const teamMembers = [
        {
            name: "Vaibhav Kanchi",
            role: "Successfully Completed React Internship",
            imageSrc: "/assets/img/achievers/01.jpeg",

        },
        {
            name: "Tushar Deshmukh",
            role: "Successfully Completed React Internship",
            imageSrc: "/assets/img/achievers/02.jpeg",

        },
        {
            name: "Aniket Yadav",
            role: "Successfully Completed NodeJs Internship",
            imageSrc: "/assets/img/achievers/03.jpeg",

        },
        {
            name: "Abhishek Anand",
            role: "Successfully Completed AWS Internship",
            imageSrc: "/assets/img/achievers/04.jpeg",

        },
        {
            name: "Samarth Bhokare",
            role: "Successfully Completed NodeJs Internship",
            imageSrc: "/assets/img/achievers/10.jpeg",

        },
        {
            name: "Renu Kuratkar",
            role: "Successfully Completed React Internship",
            imageSrc: "/assets/img/achievers/05.jpeg",

        },
        {
            name: "Poonam Rathod",
            role: "Successfully Completed React Internship",
            imageSrc: "/assets/img/achievers/07.jpeg",

        },
        {
            name: "Prajkata Kokate",
            role: "Successfully Completed WordPress Internship",
            imageSrc: "/assets/img/achievers/06.jpeg",

        },
        {
            name: "Pooja Naitam",
            role: "Successfully Completed ReactJs Internship",
            imageSrc: "/assets/img/achievers/09.jpg",

        },
        {
            name: "Aarti Khandagale",
            role: "Successfully Completed WordPress Internship",
            imageSrc: "/assets/img/achievers/08.jpg",

        },

    ];
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [isClient, setisClient] = useState(false);

    const handleOpenDialog = (member) => {
        setSelectedMember(member);
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
        setSelectedMember(null);
    };
    useEffect(() => {
        console.log('cient side rendring ');

        setisClient(true);
    }, []);

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Top Achievers">
                <div
                    style={{ paddingTop: '60px' }}
                >
                    <div style={{ textAlign: 'center', paddingTop: '0', paddingBottom: '0', alignItems: 'center', padding: '25px 120px' }}>

                        <h2
                            className="wow fadeInUp"
                            data-wow-delay=".3s"
                            style={{ display: "flex", justifyContent: "center" }}
                        >
                            Our Top Achievers
                        </h2>

                    </div>
                    <section className="team-section-4 section-padding" style={{ paddingTop: '16px' }}>
                        <div className="container">
                            <div className="row g-4">
                                {teamMembers.map((member, index) => (
                                    <div
                                        key={index}
                                        className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp"
                                        data-wow-delay=".3s"
                                    >
                                        <div
                                            className="team-card-items mt-0"
                                            style={{
                                                width: 'auto',
                                                border: '1px solid #e0e0e0',
                                                borderRadius: '20px', // Border radius applied here
                                                overflow: 'hidden' // Ensures the border radius also affects the image
                                            }}
                                        >
                                            <div onClick={() => handleOpenDialog(member)} style={{ cursor: 'pointer' }}>
                                                {/* Wrapping image and content in a single div */}
                                                <div className="team-image">
                                                    <img
                                                        src={member.imageSrc}
                                                        alt="team-img"
                                                        style={{ width: '100%', height: 'auto' }} // Ensure the image is responsive
                                                    />
                                                </div>
                                                <div className="team-content" style={{ padding: '10px' }}>
                                                    <h3>
                                                        <Link
                                                            onClick={(e) => { e.preventDefault(); handleOpenDialog(member); }}
                                                            sx={{ textDecoration: 'none', color: 'black' }}
                                                        >
                                                            {member.name}
                                                        </Link>
                                                    </h3>
                                                    <p style={{ fontSize: '16px', fontWeight: 600 }}>
                                                        {member.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>


                    {selectedMember && isClient && (
                        <Dialog
                            open={dialogOpen}
                            onClose={handleCloseDialog}
                            maxWidth="md"
                            fullWidth
                            PaperProps={{
                                style: {
                                    position: 'fixed',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    margin: 0,
                                    borderRadius: '12px',
                                    height: '100vh',
                                    maxWidth: '400px',
                                    overflow: 'hidden',
                                    paddingTop: '28px'
                                },
                            }}
                        >
                            <DialogActions style={{ padding: '0 8px' }}>
                                <IconButton
                                    aria-label="close"
                                    onClick={handleCloseDialog}
                                    style={{
                                        position: 'absolute',
                                        right: 8,
                                        top: 1,
                                        color: '#000',
                                        zIndex: 10,
                                    }}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </DialogActions>
                            <DialogContent>
                                <div
                                    className="team-card-items mt-0"
                                    style={{ width: 'auto', border: '1px solid #e0e0e0', padding: '0px 24px', paddingBottom: '10px' }}
                                >
                                    <div
                                        className="team-image"
                                        style={{ height: '40%' }}
                                    >
                                        <img
                                            src={selectedMember.imageSrc}
                                            alt="team-img"
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </div>
                                    <div className="team-content">
                                        <h3>{selectedMember.name}</h3>
                                        <p style={{ fontSize: '16px', fontWeight: 600 }}>
                                            {selectedMember.role}
                                        </p>
                                        {/* <p style={{ fontSize: '15px' }}>
                                            {selectedMember.description}
                                        </p> */}
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    )}


                    <section className="achievement-section-3 fix section-bg-2">
                        <div className="shape-image">
                            <img src="/assets/img/achiv-shape.png" alt="shape-img" />
                        </div>
                        <div className="container">
                            <div className="achievement-wrapper style-2">
                                <div className="section-title mb-0">
                                    <span className="text-white wow fadeInUp">achievement</span>
                                    <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                        Celebrate Major Wins
                                    </h2>
                                </div>
                                <div className="counter-area">
                                    <div
                                        className="counter-items wow fadeInUp"
                                        data-wow-delay=".3s"
                                    >
                                        <div
                                            className="icon"
                                            style={{ display: "flex", justifyContent: "center" }}
                                        >
                                            <img
                                                src="/assets/img/achievement-icon/01.svg"
                                                alt="icon-img"
                                            />
                                        </div>
                                        <div className="content">
                                            <h2>
                                                <CounterUp count={6561} />+
                                            </h2>
                                            <p>Students</p>
                                        </div>
                                    </div>
                                    <div
                                        className="counter-items wow fadeInUp"
                                        data-wow-delay=".5s"
                                    >
                                        <div
                                            className="icon"
                                            style={{ display: "flex", justifyContent: "center" }}
                                        >
                                            <img
                                                src="/assets/img/achievement-icon/02.svg"
                                                alt="icon-img"
                                            />
                                        </div>
                                        <div className="content">
                                            <h2>
                                                <CounterUp count={600} />+
                                            </h2>
                                            <p>Projects</p>
                                        </div>
                                    </div>
                                    <div
                                        className="counter-items wow fadeInUp"
                                        data-wow-delay=".7s"
                                    >
                                        <div
                                            className="icon"
                                            style={{ display: "flex", justifyContent: "center" }}
                                        >
                                            <img
                                                src="/assets/img/achievement-icon/03.svg"
                                                alt="icon-img"
                                            />
                                        </div>
                                        <div className="content">
                                            <h2>
                                                <CounterUp count={250} />+
                                            </h2>
                                            <p>Skilled Mentors</p>
                                        </div>
                                    </div>
                                    <div
                                        className="counter-items wow fadeInUp"
                                        data-wow-delay=".9s"
                                    >
                                        <div
                                            className="icon"
                                            style={{
                                                height: "60px",
                                                display: "flex",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <img
                                                src="/assets/img/certified_students.png"
                                                alt="icon-img"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "contain",
                                                    filter: "invert(1)",
                                                }}
                                            />
                                        </div>
                                        <div className="content">
                                            <h2>
                                                <CounterUp count={6561} />+
                                            </h2>
                                            <p>Certified Students</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}
