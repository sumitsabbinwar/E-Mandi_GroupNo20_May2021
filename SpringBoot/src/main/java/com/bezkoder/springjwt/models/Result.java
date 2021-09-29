package com.bezkoder.springjwt.models;

import javax.persistence.*;

@Entity
@Table(name="result")
public class Result {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="user")
	private User user;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="post_id")
	private FarmerPost farmerPost;
	
	@Column(name="reviews")
	private String reviews;
	
	
	
	public Result() {
		
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public FarmerPost getFarmerPost() {
		return farmerPost;
	}

	public void setFarmerPost(FarmerPost farmerPost) {
		this.farmerPost = farmerPost;
	}

	public String getReviews() {
		return reviews;
	}

	public void setReviews(String reviews) {
		this.reviews = reviews;
	}

	public Result( FarmerPost farmerPost, String reviews, User user) {
		super();
		this.user= user;
		this.farmerPost = farmerPost;
		this.reviews = reviews;
	}
	
	
	
}
