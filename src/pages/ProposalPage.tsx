import React, { useState } from 'react';
import './ProposalPage.css';

const ProposalPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        website: '',
        company: '',
        budget: 'default',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your request. In a real app, this would send data to the backend.');
    };

    return (
        <div className="proposal-page">
            <div className="section proposal-header">
                <div className="container">
                    <h1 className="page-title text-center">Ready to <span className="text-gradient">Grow?</span></h1>
                    <p className="page-subtitle text-center">
                        Get a custom proposal and ROI projection. No pressure, just strategy.
                    </p>
                </div>
            </div>

            <div className="container proposal-container">
                <div className="glass-card proposal-form-card">
                    <h2 className="form-title">Tell us about your goals</h2>
                    <form onSubmit={handleSubmit} className="proposal-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    required
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="John"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    required
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Work Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@company.com"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="(555) 123-4567"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="website">Website (Optional)</label>
                                <input
                                    type="url"
                                    id="website"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    placeholder="https://yourwebsite.com"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="company">Company Name</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Acme Inc."
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="budget">Monthly Marketing Budget</label>
                            <select
                                id="budget"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                            >
                                <option value="default" disabled>Select your budget range</option>
                                <option value="<2500">$1,000 - $2,500</option>
                                <option value="2500-5000">$2,500 - $5,000</option>
                                <option value="5000-10000">$5,000 - $10,000</option>
                                <option value="10000-25000">$10,000 - $25,000</option>
                                <option value="25000+">$25,000+</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Anything else we should know?</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your specific challenges..."
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Send Proposal Request</button>
                    </form>
                </div>

                <div className="proposal-sidebar">
                    <div className="trust-card">
                        <h3>What happens next?</h3>
                        <ul className="process-list">
                            <li>
                                <div className="step-num">1</div>
                                <div>We'll analyze your website and competitors.</div>
                            </li>
                            <li>
                                <div className="step-num">2</div>
                                <div>An expert strategist will compile a custom ROI projection.</div>
                            </li>
                            <li>
                                <div className="step-num">3</div>
                                <div>We'll walk you through the plan on a 15-min call.</div>
                            </li>
                        </ul>
                    </div>

                    <div className="trust-card bg-secondary">
                        <h3>Why Dibull?</h3>
                        <div className="stat-mini">
                            <div className="stat-val text-gradient">91%</div>
                            <div className="stat-lbl">Client Retention Rate</div>
                        </div>
                        <div className="stat-mini">
                            <div className="stat-val text-gradient">300+</div>
                            <div className="stat-lbl">5-Star Reviews</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProposalPage;
