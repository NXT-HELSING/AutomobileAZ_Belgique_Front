import React, { useState } from 'react'
import { contactApi } from '../services/api'

const ContectForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [status, setStatus] = useState({ type: '', message: '' })
    const [submitting, setSubmitting] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        setStatus({ type: '', message: '' })

        try {
            const response = await contactApi.send(form)
            setStatus({ type: 'success', message: response.data.message })
            setForm({ name: '', email: '', subject: '', message: '' })
        } catch (error) {
            const apiMessage = error.response?.data?.message
            const fieldErrors = error.response?.data?.errors
            const details = fieldErrors
                ? Object.values(fieldErrors).flat().join(' ')
                : null
            setStatus({
                type: 'error',
                message: details || apiMessage || 'Une erreur est survenue. Veuillez réessayer.',
            })
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className="col-xl-6 m-b40">
            <div className="contact-area1">
                <form className="dlab-form style-1" onSubmit={handleSubmit}>
                    {status.message && (
                        <div className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`}>
                            {status.message}
                        </div>
                    )}

                    <div className="row sp10">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Nom complet</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        required
                                        className="form-control"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>E-mail</label>
                                <div className="input-group">
                                    <input
                                        type="email"
                                        required
                                        className="form-control"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label>Sujet</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        required
                                        className="form-control"
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        placeholder=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label>Message</label>
                                <div className="input-group">
                                    <textarea
                                        name="message"
                                        required
                                        className="form-control"
                                        value={form.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <button
                                type="submit"
                                disabled={submitting}
                                className="btn btn-primary w-100 d-block btn-rounded"
                            >
                                {submitting ? 'ENVOI EN COURS...' : 'ENVOYER LE MESSAGE'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContectForm
