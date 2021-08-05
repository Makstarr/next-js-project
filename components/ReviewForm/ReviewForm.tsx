import Button from '../Button/Button';
import Input from '../Input/Input';
import Rating from '../Rating/Rating';
import Textarea from '../Textarea/Textarea';
import { ReviewFormProps } from './ReviewForm.props';
import { ReviewFormWrapper, RatingWrapper, Submit, Info, Icon, Message } from './ReviewForm.styles';
import Close from './close.svg';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm, IReviewSentResponce } from './ReviewForm.interface';
import axios from 'axios';
import { API } from '../../helpers/api';
import { useState } from 'react';

const ReviewForm = ({ productId, ...props }: ReviewFormProps): JSX.Element => {
	const { register, control, handleSubmit, reset, formState: { errors } } = useForm<IReviewForm>();
	const [isSuccess, setIsSuccess] = useState<boolean>();
	const [error, setError] = useState<string>("");
	const onSubmit = async (formData: IReviewForm) => {
		try {
			const { data } = await axios.post<IReviewSentResponce>(API.review.createDemo, { ...formData, productId });
			if (data.message) {
				setIsSuccess(true);
			} else {
				reset();
				setError("Что-то пошло не так");
			}
		}
		catch (e) {
			setError(e.message || "Что-то пошло не так");
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<ReviewFormWrapper {...props}>
				<Input error={errors.name} placeholder="Имя" {...register('name', { required: { value: true, message: 'Заполните имя' } })} />
				<Input error={errors.title} placeholder="Заголовок отзыва" {...register('title', { required: { value: true, message: 'Заполните заголовок' } })} />
				<RatingWrapper>
					<span>Оценка:</span>
					<Controller
						control={control}
						rules={{ required: { value: true, message: 'Укажите оценку' } }}
						name="rating"
						render={({ field }) => (
							<Rating error={errors.rating} rating={field.value} isEditable setRating={field.onChange} ref={field.ref} />
						)
						} />
				</RatingWrapper>
				<Textarea
					error={errors.description} placeholder="Текст отзыва" {...register('description', { required: { value: true, message: 'Заполните заголовок' } })}
				/>
				<Submit>
					<Button appearence="primary">Отправить</Button>
					<Info>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</Info>
				</Submit>
			</ReviewFormWrapper>
			{isSuccess && <Message type="success">
				<h3>Ваш отзыв отправлен</h3>
				<div>
					Спасибо, Ваш отзыв будет опубликован после проверки.
				</div>

				<Icon>	<Close onClick={() => { setIsSuccess(false); }} /></Icon>
			</Message>}
			{error && <Message type="error">
				<h3>Уупс...</h3>
				<div>
					{error}
				</div>

				<Icon>	<Close onClick={() => { setError(""); }} /></Icon>
			</Message>}
		</form>
	);
};

export default ReviewForm;
