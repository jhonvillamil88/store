import React, { useEffect } from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import * as Yup from "yup";
import Link  from 'next/link';


import styles from '../styles/CarForm.module.css';


const carForm = ({onClickShopCancel}) => (
    <div className={styles.carFormContainer}>
       <Formik
        initialValues={{ email: "", name:"",phone:"" }}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            }, 500);
        }}
        validationSchema={Yup.object().shape({
            name: Yup.string().trim()
            .matches( /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi, 'El nombre solo puede contener letras')
            .required("Required"),
            email: Yup.string()
            .email()
            .required("Required"),
            phone: Yup
            .string()
            .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'El numero de telefono no es valido')
            .required("Required")
            .when("email", (email, schema) => {
                return !!email ? schema.required() : schema;
            })
            
        })}
        >
        {props => {
            const {
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset
            } = props;
            
            return (
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="name" style={{ display: "block" }}>Nombre *</Form.Label>
                        <Form.Control 
                            id="name"
                            placeholder="Ingrese su nombre"
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.name && touched.name
                                ? styles.inputError
                                : styles.inputOk
                            }
                        />
                        {errors.name && touched.name && (
                            <div className={styles.inputFeedback}>{errors.name}</div>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="email" style={{ display: "block" }}>Email *</Form.Label>
                        <Form.Control 
                            id="email"
                            placeholder="Ingrese su email"
                            type="text"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.email && touched.email
                                ? styles.inputError
                                : styles.inputOk
                            }
                        />
                        {errors.email && touched.email && (
                            <div className={styles.inputFeedback}>{errors.email}</div>
                        )}
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="phone" style={{ display: "block" }}>Teléfono *</Form.Label>
                        <Form.Control 
                            id="phone"
                            name="phone"
                            placeholder="Ingrese su teléfono"
                            type="text"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                                errors.phone && touched.phone
                                ? styles.inputError
                                : styles.inputOk
                            }
                        />
                        {errors.phone && touched.phone && (
                            <div className={styles.inputFeedback}>{errors.phone}</div>
                        )}
                    </Form.Group>
                    <div className={styles.buttonSection}>
                        <Button variant="danger" onClick={onClickShopCancel}>Cancelar Compra</Button>
                        <Link href="/list"><Button variant="secondary">Seguir comprando</Button></Link>
                        <Button variant="primary" type="submit" disabled={isSubmitting}>
                            Confirmar compra
                        </Button>
                    </div >

                </Form>
            );
        }}
    </Formik>
    </div>
  );

export default carForm