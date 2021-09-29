package com.bezkoder.springjwt.models;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="bid")
public class Bid {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name= "bids")
	private String bids;
	
	 @ManyToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="user")
//	 private List<User> user;
//	  private User user;
	
 private Set<User> user = new HashSet<>();
	 

	 @OneToOne(fetch = FetchType.EAGER)
		@JoinColumn(name="fpost")
		private FarmerPost farmerpost;

	

	public Bid(FarmerPost farmerpost) {
		super();
		this.farmerpost = farmerpost;
	}

	public FarmerPost getFarmerpost() {
		return farmerpost;
	}


	public Bid(String bids) {
		super();
		this.bids = bids;
	}


	public void setFarmerpost(FarmerPost farmerpost) {
		this.farmerpost = farmerpost;
	}

//	public void setUser(User user) {
//		this.user = User;
//	}





	public Bid( ) {
		super();
	}




	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getBids() {
		return bids;
	}
	public void setBids(String bids) {
		this.bids = bids;
	}

	public Set<User> getUser() {
		return user;
	}

	public void setUser(Set<User> user) {
		this.user = user;
	}
	
	

}
