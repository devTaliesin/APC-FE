import * as Dialog from '@radix-ui/react-dialog'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';

import OperateStore from '../../stores/operate_store'
import modalStyles from '../../styles/Modal.module.scss'
import buttonStyles from '../../styles/Button.module.scss'
import { videoSourceForm, addVideoSource } from '../../api';

const VideoSourceForm = () => {
    const { videoSourceFormFlag, changeVideoSourceFormFlag } = OperateStore()

    const validationSchema = Yup.object({
        ip: Yup.string()
            .matches(
                /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/,
                '유효하지 않은 IP 주소입니다.'
            )
            .required('IP 주소를 입력해주세요'),
        
        port: Yup.number()
            .min(1, '유효하지 않은 Port 번호입니다.')
            .max(65535, '유효하지 않은 Port 번호입니다.')
            .required('Port 번호를 입력해주세요'),
        
        name: Yup.string()
            .min(2, '유효하지 않은 카메라 이름입니다.')
            .max(50, '유효하지 않은 카메라 이름입니다.')
            .required('카메라 이름을 입력해주세요'),
        
        user: Yup.string()
            .min(3, '유효하지 않은 Onvif ID입니다.')
            .max(30, '유효하지 않은 Onvif ID입니다.')
            .required('Onvif ID를 입력해주세요'),
        
        pass: Yup.string()
            .min(6, '유효하지 않은 Onvif 비밀번호입니다.')
            .required('Onvif 비밀번호를 입력해주세요')
    });

    const submitHandler = async (values: videoSourceForm) => {
        console.log(values)
        let req
        try {
            req = await addVideoSource(values)
            console.log(req)
        } catch (err) {
            console.log(err)
        }
    }
    return ( 
    <div className={modalStyles.videoSourceForm}>
        <Dialog.Root 
        open={videoSourceFormFlag}
        onOpenChange={changeVideoSourceFormFlag}
        >
            <Dialog.Portal>
                <Dialog.Overlay className={modalStyles.dialogOverlay} />
                <Dialog.Content 
                className={modalStyles.dialogContent}
                aria-describedby={undefined}
                >
                    <Dialog.Title>
                        카메라 정보 추가
                    </Dialog.Title>
                    {/* <Dialog.Description> */}
                        <Formik
                        initialValues={{ip: '', port: undefined, name: '', user: '', pass: ''}}
                        validationSchema={validationSchema}
                        onSubmit={submitHandler}
                        >   
                            <Form className={modalStyles.form}>
                                {['ip', 'port', 'name', 'user', 'pass'].map((field, idx) => (
                                    <div key={idx} className={modalStyles.fieldWrapper}>
                                        <Field
                                            name={field}
                                            placeholder={field === 'user' ? 'ID' : field.toUpperCase()}
                                            type={field === 'pass' ? 'password' : field === 'port' ? 'number' : 'text'}
                                            className={modalStyles.inputField}
                                        />
                                        <div className={modalStyles.errorMessage}>
                                            <ErrorMessage name={field} />
                                        </div>
                                    </div>
                                ))}

                                <button 
                                type='submit'
                                className={buttonStyles.submitButton}onClick={() => {}}>
                                    카메라 등록
                                </button>
                            </Form>
                        </Formik>
                    {/* </Dialog.Description> */}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    </div>
    )
}

export default VideoSourceForm